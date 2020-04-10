/*
-------------------------------------------
   Server action code
   Gets the Financial Accounts for the given:
    FinServ__OwnerType__c and  FinServ__RecordTypeName__c
     
   mohan chinnappan (apr-09-2020)
   MIT License
-------------------------------------------
*/

public with sharing class FAData {
    
    @AuraEnabled(cacheable=true)
    public static List<FinServ__FinancialAccount__c>  getFAs(String ownerType,  String rtn){
        return [SELECT Id , Name,
                   
                    FinServ__Household__c , 
                    FinServ__FinancialAccountNumber__c,
                    FinServ__PrimaryOwner__c,
                    FinServ__Balance__c,
                    FinServ__RecordTypeName__c,
                    FinServ__Ownership__c,
                    FinServ__FinancialAccountType__c
                    
                    FROM FinServ__FinancialAccount__c
                      WHERE FinServ__OwnerType__c =  :ownerType 
                      AND FinServ__RecordTypeName__c = :rtn 
                      
                  ] ;
    }


}
