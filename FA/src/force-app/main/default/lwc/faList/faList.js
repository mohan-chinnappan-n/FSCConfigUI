/*
-------------------------------------------
   FaList has features:
   - Configurable for the required Financial Account Type
   - Built-in View All feature
   - Sorting on Balance supported
   - Graphing - donut chart
   - Detail view support for the selected record
        - Getting latest Account Balance from via REST Call
   - Account Summary
   
   (mohan chinnappan, apr-09-2020, creation)
   MIT License
-------------------------------------------
*/

import { LightningElement, api, wire , track} from 'lwc';
import getFAs from '@salesforce/apex/FAData.getFAs';

import {Canvas} from './Canvas';
import {FABalUtil} from 'c/faBalUtil';


export default class FaList extends LightningElement {
    @api recordId;
    
    @api recordTypeName = 'Investment Account'
    @api limit  =  10;
    @api showRowNumber=false;
    @api showGraph = false;
    @api nameInitialWidth = 250;

    @api showPrintView = false;
    @api showPdf = false;
    @api showDetails = false;
    @api showSync = false;
    @api showSummary = false;
    @api summaryType = 'table';

    @track tableTitle
    
    // FA data
    @track count;
    @track balSum;
    @track multiple;
    @track recCount;
    @track error;

    
    @track fasData;
    @track allFasData;
    @track hasData = false;
   
  
    // sorting 
    @track defaultSortDirection = 'asc';
    @track sortDirection = 'asc';
    @track sortedBy;

    @track bShowModal = false;

    @track newBal;

    get tableFormat() {
        return  this.summaryType === 'table' ? true : false;
    }
    get gridFormat() {
         return  this.summaryType === 'grid' ? true : false;
    }



    // for view columns
    faViewColumns = [
        {label: 'Name', name: 'Name'},
        {label: 'Balance', name: 'FinServ__Balance__c', type:'currency'},
        {label: 'Ownership', name: 'FinServ__Ownership__c'},
        {label: 'Account Type', name: 'FinServ__FinancialAccountType__c'},
        {label: 'Opened Date', name: 'FinServ__OpenDate__c'},
        {label: 'Held Away', name: 'FinServ__HeldAway__c'},
        {label: 'Last Updated', name: 'FinServ__LastUpdated__c'},
    ];
    // column mapping for the datatable
    faColumnsDefault = [
       { label: 'Name',
         fieldName : 'nameUrl',
         type: 'url',
         initialWidth: this.nameInitialWidth,
         typeAttributes: {label: { fieldName: 'Name'}, target: '_blank'}
       },

        { label: 'Account#', fieldName: 'FinServ__FinancialAccountNumber__c'    },
        { label: 'Balance', fieldName: 'FinServ__Balance__c', type: 'currency',  sortable: true,
           cellAttributes: { alignment: 'left' } 
        },
        { label: 'Ownership', fieldName: 'FinServ__Ownership__c'   },
        { label: 'Type', fieldName: 'FinServ__FinancialAccountType__c' },

       
    ];

    faSummaryColumns = [
        { label: 'Type', fieldName: 'FinServ__FinancialAccountType__c' },
        { label: 'Total', fieldName: 'total', type: 'currency',  sortable: true,
           cellAttributes: { alignment: 'right' } 
        },

    ]

    // specs for the optional columns
    colSpecs = {
    'showPrintView': 
        { label: 'Print',
        fieldName : 'printUrl',
        type: 'url',
        initialWidth: this.nameInitialWidth,
        typeAttributes: {label: { fieldName: 'Print'}, target: '_blank'}
      }, 
    'showDetails':  {
        label: 'Detail',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            iconName: 'action:preview',
            title: 'Detail',
            variant: 'border-filled',
            alternativeText: 'Detail'
        }
    }

    
    }

    // adds the optional columns based on the selection in app-builder
    addFeatures = (flags) => {
        flags.forEach(flag => {
            if (flag.opt)  {
                this.faColumnsDefault = [... this.faColumnsDefault, this.colSpecs[flag.key] ];
            }
        });
    }
        
    // get the data only once with caching at the server side
    @wire(getFAs, { ownerType: '$recordId', rtn: '$recordTypeName' })
    wiredFas({ data, error }) {
       this.addFeatures([ 
                { opt: this.showPrintView, key: 'showPrintView'},
                { opt: this.showDetails, key: 'showDetails'},
            ]);
       let nameUrl;
       let printUrl;
       if (data) {
            this.count = data.length;
            this.hasData = true;
            // render table title based on the count of the records
            if (this.count > 1) {
                this.tableTitle = `${this.recordTypeName}s(${this.count})`;
                this.multiple = true;
            }
            else  this.tableTitle = this.recordTypeName;
            this.allFasData = data.map(row => {
                // prepare for the hyperlink 
                nameUrl = `/${row.Id}`;
                printUrl = `/${row.Id}/p`;
                return {...row , nameUrl,printUrl }
            });
            // show only required on the bootstrap
            this.fasData  = this.allFasData.slice(0,this.limit ? this.limit : 10);
            this.error = undefined;
           
            // summing

            if (this.count < 1) {
                this.showSummary = false;
                this.hasData = false;
                return;
            }

            // group by
            const gby = this.allFasData.reduce((acc, curr) => {
                if(!acc[curr.FinServ__FinancialAccountType__c]) acc[curr.FinServ__FinancialAccountType__c] = []; //If this FinServ__FinancialAccountType__c wasn't previously stored
                acc[curr.FinServ__FinancialAccountType__c].push(curr);
                return acc;
            },{});
            // sum the groups
            const sums = [];
            Object.keys(gby).forEach(key => {
                let amounts = []; 
                gby[key].forEach(item => amounts.push(item.FinServ__Balance__c));
                sums.push ({FinServ__FinancialAccountType__c:key, 
                    total: amounts.reduce( (a,b) => a+b, 0)});
            });
            // grand totaling
            const totals = []; 
            sums.forEach(item => totals.push(item.total));
            const gtotal = totals.reduce( (a,b) => a+b, 0);
            sums.push({FinServ__FinancialAccountType__c:'Grand Total', total : gtotal});

            sums.forEach(item => item['totalf'] = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.total));
            
            this.balSum =  sums;


        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }


    // Action event for the details of the selected record
    handleRowAction(event) {
        const row = event.detail.row;
        this.record = row;
        this.bShowModal = true;
        this.newBal = null; 
    }
    closeModal() {
        this.bShowModal = false;
    }

    // sort stuff
    sortBy(field, reverse, primer) {
        const key = primer
            ? function(x) {
                  return primer(x[field]);
              }
            : function(x) {
                  return x[field];
              };

        return function(a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }
    onHandleSort(event) {
        const { fieldName: sortedBy, sortDirection } = event.detail;
        const cloneData = [...this.fasData];
        cloneData.sort(this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1));
        this.fasData = cloneData;
        this.sortDirection = sortDirection;
        this.sortedBy = sortedBy;
    }

    // view-all support
    handleViewAllChange(event) {
        this.viewAll = event.target.checked;
        if (this.viewAll) {
           this.fasData = this.allFasData.slice(0, this.count);
        } else {
            this.fasData = this.allFasData.slice(0, this.limit);
        }

    }

    // charts
    canvas = new Canvas();
    graphRendered = false;

    renderedCallback() {
        if (!this.showGraph) return;
        if (this.graphRendered) return;
        const canvas = document.createElement('canvas');
        this.template.querySelector('div.chart').appendChild(canvas);
        const chartlegend = this.template.querySelector('div.chartlegend');
        let faPieData = {};
        if (this.allFasData) {
            this.allFasData.forEach(fa =>  faPieData[fa.Name] = fa.FinServ__Balance__c);
            const pieFA = new this.canvas.Piechart( {
                canvas: canvas,
                dim: {h:200, w: 200},
                data: faPieData,
                doughnutHoleSize:0.4,
                legend: chartlegend

            });
            // drawing happens here
            pieFA.draw();
            this.graphRendered = true;
        }
     }


     // balance
     fabu = new FABalUtil();

      // Action event for the details of the selected record
    handleGetBal(event) {
        const id = event.target.dataset.id;
        const bal = event.target.dataset.bal;
        this.fabu.getBal(id,bal)
        .then (nb => {
            this.newBal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(nb); 
        })
        .error( err => {
            console.error(err);
            this.error = err;
        });
        
    }


     

}