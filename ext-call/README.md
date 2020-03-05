## How to make External Service Call in Aura Components


![ext-call](img/ext-call-1.gif)


### App (Perf.app)

``` xml
<aura:application extends="force:slds">
    <c:PerfComp />
</aura:application>

```
### Component (PerfComp.cmp)

``` xml

<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
    
  
   <aura:attribute name="dogImg" default="someimg" type="String" />
    


    <lightning:recordForm
                          recordId="0016g00000B6BSHAA3"
                          objectApiName="Account"
                          layoutType="Compact" mode="readonly"
                          columns="2"/>
    
    
    <lightning:button variant="brand" label="Get Doc Picture" 
                      title="Get Doc Picture" 
                      onclick="{! c.getDogPic }" />
    
    
    <img src="{!v.dogImg}"/>
    
 
    
    
    
    
</aura:component>


```

### Controller (PerfCompController.js)

``` js
({
   getDogPic: function(cmp, event, helper) {
        helper.getDogPicService(cmp);
    }
    
    
})

```

### Helper (PerfCompHelper.js)

``` js
({
	getDogPicService :  function(component) {
        const xhr = new XMLHttpRequest();
        const url = 'https://dog.ceo/api/breeds/image/random';
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if(this.status === 200) {
                const response = JSON.parse(this.responseText);
                console.log(response);
 
                if(response.status  === 'success') {
                    console.log('GOT Dog Picture: ' + response.message)
                    component.set('v.dogImg', response.message);
                     
                }
                 
               
            }
        };
        xhr.send();
    }
	
})

```

### CSP Trusted Sites
![csp trs](img/csp-ts.png)
