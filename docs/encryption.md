### Encrypting the  FinServ__FinancialAccount__c.FinServ__FinancialAccountNumber__c 

- This field is marked as ExternId
- So the **possible** solution is:
    - Create an alias for your Enterprise Account Number and use that in  FinServ__FinancialAccount__c.FinServ__FinancialAccountNumber__c
    - Aliasing algorithm will be owned by the Enterprise and kept secret by the enterprise
    - Example:
        - Enterprise Account Number: JohnDoeS13434
        - After applying Enterprise Aliasing algorithm it becomes: 234N3444 
            - This value 234N3444 is stored as FinServ__FinancialAccount__c.FinServ__FinancialAccountNumber__c   

