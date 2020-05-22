## Using DX plugin to view the ApexTestRunResult

- Describe ApexTestRunResult

```
$ sfdx mohanc:tooling:describe -s ApexTestRunResult  -u mohan.chinnappan.n-dcmc@org.com
Label : Apex Test Run Result
Num of Fields : 21
Id
IsDeleted
CreatedDate
CreatedById
LastModifiedDate
LastModifiedById
SystemModstamp
AsyncApexJobId
UserId
JobName
IsAllTests
Source
StartTime
EndTime
TestTime
Status
ClassesEnqueued
ClassesCompleted
MethodsEnqueued
MethodsCompleted
MethodsFailed
```
- Querying ApexTestRunResult

```
$ cat testquery.soql 
SELECT

Id
,IsDeleted
,CreatedDate
,CreatedById
,LastModifiedDate
,LastModifiedById
,SystemModstamp
,AsyncApexJobId
,UserId
,JobName
,IsAllTests
,Source
,StartTime
,EndTime
,TestTime
,Status
,ClassesEnqueued
,ClassesCompleted
,MethodsEnqueued
,MethodsCompleted
,MethodsFailed

FROM ApexTestRunResult

```

- Running the query

```  
$ sfdx mohanc:tooling:query  -q testquery.soql -f json -u  mohan.chinnappan.n-dcmc@org.com

#  Here you will see the json output of the test results
```
