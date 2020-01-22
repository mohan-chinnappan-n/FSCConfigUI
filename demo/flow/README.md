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


