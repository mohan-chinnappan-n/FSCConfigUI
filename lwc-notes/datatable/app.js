import { LightningElement } from 'lwc';
import fetchDataHelper from './fetchDataHelper';


const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },

];



export default class Ap extends LightningElement {
    data = [];
    columns = columns;

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async connectedCallback() {
        const data = await fetchDataHelper({ amountOfRecords: 100 });
        this.data = data;
    }


   comment = null;
   handleCommentInput(event) {
       this.comment = event.target.value;
   }

    handleComment(event) {
        // we have selected rows in this.selectedRows
        this.selectedRows.forEach((row, index) => {
            console.log(JSON.stringify(row));
            console.log(`comment: ${this.comment}`);
            // do the required updates here

        });
    }
    selectedRows = null;

    handleRowAction(event) {
        this.selectedRows = event.detail.selectedRows;

    }
}
