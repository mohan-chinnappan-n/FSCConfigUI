
``` js
// the function to be in the bal.js  
window.getBal = async (url) => {
  let response = await fetch(url);
  return await response.json()
}
//---------------

// usage
const id = 100;
const bal = 300;
// url may be a localhost server
const url = `https://mohansun-rum.herokuapp.com/bal/${id}/${bal}`; 

getBal(url).then (data => {
    document.getElementById('bal').value = JSON.stringify(data);
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
   const id = 100;
   const bal = 300;
   const url = `https://mohansun-rum.herokuapp.com/bal/${id}/${bal}`; 
   window.getBal(url).then (data => {
        console.log(data);
        // do things with 'data' 
   }).catch(e => console.log(e));


}}
```
