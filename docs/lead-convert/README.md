## Using Platform Events to do Lead Conversion


### Setup Platform Event object (LCTest__e)
![PE setup](img/pe-1.png)

### Trigger for Platform Event 
![Trigger Code](img/trigger-code.png)
```java

trigger leadConvert on LCTest__e  (after insert) {
    Lead myLead = new Lead(LastName = 'Farmer', FirstName='John', Company='Farmer And Sons');
    insert myLead;
    
    Database.LeadConvert lc = new database.LeadConvert();
    lc.setLeadId(myLead.id);
    
    LeadStatus convertStatus = [SELECT Id, MasterLabel FROM LeadStatus WHERE IsConverted=true LIMIT 1];
    lc.setConvertedStatus(convertStatus.MasterLabel);
    
    Database.LeadConvertResult lcr = Database.convertLead(lc);
    System.assert(lcr.isSuccess());
}

```

### Publish the event 
- payload
```
{
  "msg__c": "Convert"
}
```
![pub-1](img/pub-1.png)
![pub-2](img/pub-2.png)

### Account Creation
![acct](img/acct-creation.png)

### Contact Creation
![contact](img/contact-creation-1.png)





