({
    fetchAccts : function(cmp, event, helper) {
        cmp.set('v.acctCols', [
               {label: 'Account Name', fieldName: 'Name', type: 'text'},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
                {label: 'Website', fieldName: 'Website', type: 'url '}
            ]);
        var action = cmp.get("c.fetchAccounts");
        action.setParams({
            lmt: cmp.get('v.lmt')
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.acctList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
    
   
    
})
