// FROM:
// lookupId = (Id)(sObj.getSObject(relationshipName).get(MoiCommonUtils.getApiName('PrimaryContact__c')));

// TO:
SObject rec = sObj.getSObject(relationshipName);
if(rec != null) {
    lookupId = (Id) rec.get(MoiCommonUtils.getApiName('PrimaryContact__c'));
}
