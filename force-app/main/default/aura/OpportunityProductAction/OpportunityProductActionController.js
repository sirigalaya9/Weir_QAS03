({

    init: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
            var oppRecord = component.get("v.oppRecord");
            var recordId = component.get("v.recordId");

            var navService = component.find("navService");
            var pageRef = {
                type: "standard__component",
                attributes: {
                    componentName: 'c__OpportunityProduct'
                },
                state: {
                    "c__recordId" : recordId,
                    "c__oppRecord" : oppRecord
                }          
            }
            //pageRef.state.backgroundContext="/lightning/cmp/c__OpportunityProduct?c__recordId="+recordId;
            var navService = component.find("navService");
            navService.navigate(pageRef);
        }

    }
})