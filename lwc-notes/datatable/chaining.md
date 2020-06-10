## Promise Chaining with Promise.all

### Demo

![demo](img/lwc-dt-chaining-2.gif)

### code

```js

  handleCommentSearch(event) {
    getFruitsSearch({
      comment: this.comment
    }).then((result) => {
      // Since we made this result object immutable to protect integrity of the cache
      // - we need to copy the results to mappedResult
      //  and add required mapping
      this._mappedFruits = result.map((rec) => ({
        ...rec,
        WHName: rec.Warehouse__r.Name // add new fields here
      }));
     
      // prepare for Promise.all call
      let promises = [];
      this._mappedFruits.forEach( (rec, index) => {
        promises.push( augment( {name: rec.Name}));
      });
      Promise.all(promises).then((values) => {
        values.forEach( (value, index) => {
           this._mappedFruits[index].WHName += ' ' +  value; 
        });
        this.myFruits = this._mappedFruits;
      }); 
      // TODO: error handling
    });
  }

```

### Apex

```java

 @AuraEnabled(cacheable=true)
   public static String augment(String name) {
        return name + 'WOW';
   }


```

