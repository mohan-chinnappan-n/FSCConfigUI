/*
-------------------------------------------
   FaList has features:
   - Configurable for the required Financial Account Type
   - Built-in View All feature
   - Sorting on Balance supported
   
   mohan chinnappan (apr-09-2020)
   MIT License
-------------------------------------------
*/

import { LightningElement, api, wire , track} from 'lwc';
import getFAs from '@salesforce/apex/FAData.getFAs';


export default class FaList extends LightningElement {
    @api recordId;
    
    @api recordTypeName = 'Investment Account'
    @api limit  =  10;
    @api showRowNumber=false;
    @api nameInitialWidth = 250;
    @track tableTitle
    
    // FA data
    @track count;
    @track multiple;
    @track recCount;
    @track error;
    
    @track fasData;
    @track allFasData;
   
  
    // sorting 
    @track defaultSortDirection = 'asc';
    @track sortDirection = 'asc';
    @track sortedBy;


    // get the data only once with caching at the server side
    @wire(getFAs, { ownerType: '$recordId', rtn: '$recordTypeName' })
    wiredFas({ data, error }) {
        let nameUrl;
        if (data) {
            this.count = data.length;
            if (this.count > 1) {
                this.tableTitle = `${this.recordTypeName}s(${this.count})`;
                this.multiple = true;
            }
            else  this.tableTitle = this.recordTypeName;
            this.allFasData = data.map(row => {
                // prepare for the hyperlink 
                nameUrl = `/${row.Id}`;
                return {...row , nameUrl}
            });
            // show only required on the bootstrap
            this.fasData  = this.allFasData.slice(0,this.limit ? this.limit : 10);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    // column mapping for the datatable
    faColumns = [
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

}