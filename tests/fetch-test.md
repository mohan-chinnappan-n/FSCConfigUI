
``` js
// the function to be in the bal.js  
window.getBal = async (id, bal) => {
  // url may be a localhost server
  const url = `https://mohansun-rum.herokuapp.com/bal/${id}/${bal}`; 
  let response = await fetch(url);
  return await response.json()
}


const id = 100;
const bal = 300;
getBal(id,bal).then (data => {
    document.getElementById('bal').value = JSON.stringify(data);
    console.log(data);
}).catch(e => console.log(e));

```


###  STEPS 

- add this lib.js into static resources (say bal)
- add this url to 
    - CSP 
    - remote site settings

- In the component have script require tag:
```xml
<ltng:require scripts="{!$Resource.bal}" afterScriptsLoaded="{!c.afterScriptsLoaded}" />
```
- In the component controller:
``` js
{{

 afterScriptsLoaded: function(cmp, event, helper) {
   window.getBal(100,200).then (data => {
   console.log(data);
   // do things with 'data' 
 }


}}
```
