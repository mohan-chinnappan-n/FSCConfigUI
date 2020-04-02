## How to get current URI, userId, recordId, sObjectName in Aura Lightning Component

![uri info](img/get-current-uri-2.png)


### Component

``` xml
<aura:component implements="force:hasSObjectName,force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    <aura:attribute name="currentURI" default="none" type="String" />
    <aura:attribute name="userId" default="none" type="String" />
    
    <aura:attribute name="sObjectName" type="String"/>
    <aura:attribute name="recordId" default="none" type="String" />
    
    <aura:attribute name="errorMsg"  default="none" type="String"/>

    <p>currentURI: {!v.currentURI}</p>
    <p>userId: {!v.userId}</p>
    <p>recordId: {!v.recordId}</p>
    <p>sObjectName: {!v.sObjectName}</p>

    <aura:unescapedHtml value="{!v.errorMsg}"/>    
    
</aura:component>
```

### Controller

```js
({
	doInit : function(component, event, helper) {
        component.set('v.currentURI', window.location.pathname);
        component.set('v.userId',  $A.get( "$SObjectType.CurrentUser.Id" ));

    const errorMsg = `
     3/30/2020 2:20 PM : Unknown error occurred during 1:1 Invite Accept process. System will retry over the next two to three hours. Status Code: 404
     <br>3/30/2020 2:20 PM : System will reprocess the Household build within the next hour.;
     <br><a href='https://google.com'>Google</a>
     
     `;
     component.set('v.errorMsg', errorMsg);

	}
})

```
