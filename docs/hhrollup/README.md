## FSC Household Rollup for the given Household in realtime

### Overview
- System performs on-demand rollup required for the Household the user currently viewing
- Makes use of the out-of-the-box FSC RBL configs to trigger the required rollups for the household in context 


### Demo
![Demo](img/HH-Rollup-1.gif)

### Updated Accounts - note the updated dates
![updated accounts](img/account-update-1.png)


### Setup requirements

1. We have used this feature for ```FinServ__FinancialAccount__c``` related RBLS (```FinServ__RollupByLookupConfig__c```)

- One-time step up via script ( DX can be used) to update the ```FinServ__UpdateOnChange__c``` in ```FinServ__RollupByLookupConfig__c``` object
    - Currently done for the records in ```FinServ__RollupByLookupConfig__c WHERE FinServ__FromObject__c = 'FinancialAccount__c```   
    - ```FinServ__ProcessType__c``` is set to ```Realtime```
    - ```FinServ__Active__c is``` set to ```True```

- ![RBL_FA](img/RBL-config-FA-1.png)

- Example RBL:
- ![RBL2](img/rbl-2.png)

2. Custom Field **Rollup_Toggle__c** needs to be created in the object FinServ__FinancialAccount__c
![toggle rollup](img/fa-field-rolluptoggle.png)


### Component  HHRollup.cmp

```xml

<aura:component controller='HHRollupCtrl'
                implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
    
    <aura:attribute name="recordId" type="String" />
    <aura:attribute name="status" type="String" default="none" />
    
    <!-- 
    <lightning:button variant="brand"  title="Perform Household Rollup "  
                      label="Perform Household Rollup" 
                      onclick="{! c.performRollup }"/>
    -->
    
     <aura:handler name='init' value='{!this}' action='{!c.performRollup}' 
                  description = 'Performs Household Rollup' />
   
    
    
    
    <lightning:card footer="FSC Household Rollup" title="">
        <aura:if isTrue="{!v.status !='none' }">
            <span class="slds-p-horizontal_small">
                <p>{!v.status}</p>
            </span>
        </aura:if>
    </lightning:card>
    
    
</aura:component>

```

### Controller HHRollupController.js

```js
({
	performRollup : function(component, event, helper) {
		 var action = component.get('c.toggle'); 
         action.setParams({
            "accountId" : component.get('v.recordId') 
        });
        action.setCallback(this, function(a){
            var state = a.getState(); // get the response state
            if(state == 'SUCCESS') {
                component.set('v.status', a.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})
```

### Apex Controller HHRollupCtrl

```java
public with sharing class HHRollupCtrl {
   @AuraEnabled
    public static String toggle(String accountId) {
        String status = 'Going to do rollup';
        FinServ__FinancialAccount__c[] fas = [
            SELECT Id, Rollup_Toggle__c
                    FROM FinServ__FinancialAccount__c
                    WHERE FinServ__PrimaryOwner__c= :accountId OR FinServ__JointOwner__c = :accountId
            
        ];

        for (FinServ__FinancialAccount__c fa : fas) {
            Integer randomNumber = Integer.valueof((Math.random() * 100000));
            fa.Rollup_Toggle__c = randomNumber;
        }
        update fas;
        status = 'Rollup Completed!';
        return status;
    }
}
```


### App Builder

![app builder](img/app-buillder-2.png)