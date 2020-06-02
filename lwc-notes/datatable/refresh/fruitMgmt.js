import { LightningElement, wire } from "lwc";
import { refreshApex } from "@salesforce/apex";
import getFruits from "@salesforce/apex/FruitMgmt.getFruits";
import updateFruitComments from "@salesforce/apex/FruitMgmt.updateFruitComments";

const columns = [
  { label: "Id", fieldName: "Id", type: "Id" },
  { label: "Name", fieldName: "Name" },
  { label: "Comments", fieldName: "Comments__c" }
];

export default class FruitMgmt extends LightningElement {
  columns = columns;

  myFruits;

  _myFruits;

  @wire(getFruits)
  wiredCallback(result) {
    this._myFruits = result;
    if (result.data) {
      this.myFruits = result.data;
      this.error = undefined;
    } else if (result.error) {
      this.error = result.error;
      this.parameters = undefined;
    }
  }

  comment = null;
  handleCommentInput(event) {
    this.comment = event.target.value;
  }

  handleComment(event) {
    // we have selected rows in this.selectedRows
    let ids = []; // collect Ids
    this.selectedRows.forEach((row, index) => {
      // console.log(JSON.stringify(row));
      ids.push(row.Id);
    });
    // do the required updates here
    updateFruitComments({
      ids: ids,
      comment: this.comment
    })
      .then(() => {
        // refresh the backend
        return refreshApex(this._myFruits);
      })
      .catch((error) => {
        this.message =
          "Error received: code" +
          error.errorCode +
          ", " +
          "message " +
          error.body.message;
      });
  }
  
  selectedRows = null;
  handleRowAction(event) {
    this.selectedRows = event.detail.selectedRows;
  }
}

