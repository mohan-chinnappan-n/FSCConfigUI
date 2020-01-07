({
    fetchAccts : function(cmp, event, helper) {
        helper.fetchAccts(cmp, event, helper);
    },
    updateSelected: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        cmp.set('v.selectedRowsCount', selectedRows.length);
        cmp.set('v.selectedRows',selectedRows );
    },
    sendSelection: function (cmp, event) {
    	var selectedRows = cmp.get('v.selectedRows');
        var selIds = [];
        for ( var i = 0; i < selectedRows.length; i++ ) {
            selIds.push(selectedRows[i].Id);
        }
        cmp.set("v.selIds", selIds);
   
        console.log(selIds);
        
        var action = cmp.get("c.sendAccounts");
        action.setParams({
            accts: cmp.get('v.selIds')
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.sendStatus", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
        
        
    
	},
    
    
})
