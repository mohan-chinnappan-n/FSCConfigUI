import {LightningElement, api} from 'lwc';

/*
-------------------------------------------
   FaItem has features:
   - Simply render given item columns details
   - Since it does not know about the given record, can be used for any objects record
   
   mohan chinnappan (apr-09-2020)
   MIT License
-------------------------------------------
*/

export default class FAItem extends LightningElement {
  @api item;
  @api columns
  
  @api
  get farecord () {
     let outRecord = [];
     this.columns.forEach(col => {
        outRecord.push( {label: col.label, name: col.name, value: this.item[col.name]});
     });
     return outRecord;
  }
}