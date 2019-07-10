SELECT AccountId,

(Select ActivityDate From Tasks 
     Where RecordTypeId In ('0122f000000ChQiAAK','0122f000000ChR7AAK','0120a0000015HvTAAU','012j0000001DeNwAAK')
      And ActivityDate <= TODAY 
      And TaskSubtype = 'Call' 
       Order By ActivityDate DESC NULLS LAST LIMIT 1
),

(Select ActivityDate From Events 
     Where RecordTypeId In ('0122f000000ChQiAAK','0122f000000ChR7AAK','0120a0000015HvTAAU','012j0000001DeNwAAK') 
         And (ActivityDateTime <= 2019-07-08T20:05:57Z 
         OR (ActivityDate <= TODAY AND IsAllDayEvent = true))
          Order By ActivityDate DESC ,ActivityDateTime DESC NULLS LAST LIMIT 1
) 
          
FROM Contact WHERE Id IN ('003j000000e5W5SAAU')