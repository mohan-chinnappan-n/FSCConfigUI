Opportunity sObj = [Select Id,Account.FinServ__PrimaryContact__c from Opportunity where Id='0062M00000ekZgc' limit 1];
String relationshipName = 'Account';
// following line returns Null when there is no Account in the Oppty
Object lookupId = sObj.getSObject(relationshipName)
//       .get('FinServ__PrimaryContact__c')
;
