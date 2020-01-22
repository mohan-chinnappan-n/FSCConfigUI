## Calling flow in Apex Anonymous block


![flow-0](img/flow-0.png)
![flow-1](img/flow-1.png)
![flow-2](img/flow-2.png)
![flow-3](img/flow-code.png)




```

Map<String, Object> params = new Map<String, Object>();
Flow.Interview.FMsg farmingFlow = new Flow.Interview.FMsg(params);
farmingFlow.start();
 
String returnValue = (String) farmingFlow.getVariableValue('ReturnValue');
System.debug('Flow returned ' + returnValue);

```
### References

- [Invoke a Flow with Apex](https://developer.salesforce.com/docs/atlas.en-us.salesforce_vpm_guide.meta/salesforce_vpm_guide/vpm_distribute_system_apex.htm)

