## Promise Chaining 

### Demo

![demo](img/lwc-dt-chaining.gif)

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

      this._mappedFruits.forEach( (rec, index) => {
      augment( {name: rec.Name})
      .then ( aResult => {
           rec.WHName += ' ' +  aResult;
           this.myFruits = this._mappedFruits;
      });
    });
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

