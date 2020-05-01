
## Using Phantom js for testing Aura Components

- Install and Run phantomjs 

```
# Install on Mac
brew tap homebrew/cask
brew cask install phantomjs

# run it on port 9000
phantomjs --webdriver=9000
[INFO  - 2020-05-01T13:49:58.253Z] GhostDriver - Main - running on port 9000

```

- config.json for running the test

```js

  {
   "webdriverio":{
       "desiredCapabilities": { "browserName": "phantomjs" },
       "port": "9000"
   }
 } 

```

#### running  sfdx force:lightning:test:run -h

```
invoke Aura component tests

USAGE
  $ sfdx force:lightning:test:run [-a <string>] [-d <directory>] [-f <filepath>] [-o] [-t <number>] [-r human|tap|junit|json] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -a, --appname=appname                                                             name of your Lightning test application
  -d, --outputdir=outputdir                                                         directory path to store test run artifacts: for example, log files and test results
  -f, --configfile=configfile                                                       path to config file for the test
  -o, --leavebrowseropen                                                            leave browser open
  -r, --resultformat=(human|tap|junit|json)                                         [default: human] result format emitted to stdout; --json flag overrides this parameter
  -t, --timeout=timeout                                                             [default: 60000] time (ms) to wait for results element in dom
  -u, --targetusername=targetusername                                               username or alias for the target org; overrides default target org
  --apiversion=apiversion                                                           override the api version used for api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for this command invocation

DESCRIPTION
  Examples:
      $ sfdx force:lightning:test:run
      $ sfdx force:lightning:test:run -a tests -r human
      $ sfdx force:lightning:test:run -f config/myConfigFile.json -d testResultFolder
```


- run the testing on a scratch org

```
sfdx force:lightning:test:run -a navapp -r json -d testout  -u your_targerusername -f conf/conf.json
```

- if you run it on non-scratch org you will get the following error:
``` js
{
  "status": 1,
  "name": "scratchOrgOnly",
  "message": "Lightning Testing Service can only run in scratch orgs, because tests can permanently change org data.",
  "exitCode": 1,
  "commandName": "LightningTestRunCommand",
  "stack": "scratchOrgOnly: stack details here ",
  "warnings": []
}

```

### Documents
- [Lightning Testing Service (LTS)](https://github.com/forcedotcom/LightningTestingService)
- [Write Tests for Your Lightning Components](https://trailhead.salesforce.com/en/content/learn/modules/unit-testing-on-the-lightning-platform/lightning-component-tests)
- [Getting Started with the Lightning Testing Service](https://developer.salesforce.com/blogs/2018/04/getting-started-with-the-lightning-testing-service.html)
- [Headless Testing with PhantomJS](https://phantomjs.org/headless-testing.html)



