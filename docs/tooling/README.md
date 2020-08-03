## How to use Tooling API

### Quering InstalledSubscriberPackage

- Query

```
$ cat isp.sql
```
```sql
SELECT Id, SubscriberPackageId, SubscriberPackage.NamespacePrefix,
      SubscriberPackage.Name, SubscriberPackageVersion.Id,
      SubscriberPackageVersion.Name, SubscriberPackageVersion.MajorVersion,
      SubscriberPackageVersion.MinorVersion,
      SubscriberPackageVersion.PatchVersion,
      SubscriberPackageVersion.BuildNumber
   FROM InstalledSubscriberPackage
   ORDER BY SubscriberPackageId

```

- SFDX command
```
$ sfdx mohanc:tooling:query -q isp.sql -u mohan.chinnappan.n_ea2@gmail.com -f json
```

- Results

```
[
  {
    attributes: {
      type: 'InstalledSubscriberPackage',
      url: '/services/data/v49.0/tooling/sobjects/InstalledSubscriberPackage/0A33h0000012qJsCAI'
    },
    Id: '0A33h0000012qJsCAI',
    SubscriberPackageId: '0331H000000cMStQAM',
    SubscriberPackage: {
      attributes: [Object],
      NamespacePrefix: null,
      Name: 'TheAnalyticsMotivator'
    },
    SubscriberPackageVersion: {
      attributes: [Object],
      Id: '04t1H000001AOIaQAO',
      Name: 'TheMotivator_v1.2',
      MajorVersion: 1,
      MinorVersion: 2,
      PatchVersion: 0,
      BuildNumber: 1
    }
  },
  {
    attributes: {
      type: 'InstalledSubscriberPackage',
      url: '/services/data/v49.0/tooling/sobjects/InstalledSubscriberPackage/0A33h0000012qK9CAI'
    },
    Id: '0A33h0000012qK9CAI',
    SubscriberPackageId: '03330000000wDAbAAM',
    SubscriberPackage: {
      attributes: [Object],
      NamespacePrefix: 'sf_com_apps',
      Name: 'Salesforce Connected Apps'
    },
    SubscriberPackageVersion: {
      attributes: [Object],
      Id: '04t30000001DUvrAAG',
      Name: "Winter '16",
      MajorVersion: 1,
      MinorVersion: 7,
      PatchVersion: 0,
      BuildNumber: 1
    }
  },
  {
    attributes: {
      type: 'InstalledSubscriberPackage',
      url: '/services/data/v49.0/tooling/sobjects/InstalledSubscriberPackage/0A33h0000012qKFCAY'
    },
    Id: '0A33h0000012qKFCAY',
    SubscriberPackageId: '03336000000GVxjAAG',
    SubscriberPackage: {
      attributes: [Object],
      NamespacePrefix: 'SIQCloud',
      Name: 'SalesforceIQ Cloud'
    },
    SubscriberPackageVersion: {
      attributes: [Object],
      Id: '04t36000000adDUAAY',
      Name: 'SIQCloud OAuth',
      MajorVersion: 1,
      MinorVersion: 0,
      PatchVersion: 0,
      BuildNumber: 1
    }
  },
  {
    attributes: {
      type: 'InstalledSubscriberPackage',
      url: '/services/data/v49.0/tooling/sobjects/InstalledSubscriberPackage/0A33h0000012qJrCAI'
    },
    Id: '0A33h0000012qJrCAI',
    SubscriberPackageId: '03339000000LOydAAG',
    SubscriberPackage: {
      attributes: [Object],
      NamespacePrefix: null,
      Name: 'TH_Discovery'
    },
    SubscriberPackageVersion: {
      attributes: [Object],
      Id: '04t39000000j3xrAAA',
      Name: 'Jellyfish',
      MajorVersion: 1,
      MinorVersion: 0,
      PatchVersion: 0,
      BuildNumber: 1
    }
  },
  {
    attributes: {
      type: 'InstalledSubscriberPackage',
      url: '/services/data/v49.0/tooling/sobjects/InstalledSubscriberPackage/0A33h0000012qKCCAY'
    },
    Id: '0A33h0000012qKCCAY',
    SubscriberPackageId: '033580000009PRUAA2',
    SubscriberPackage: {
      attributes: [Object],
      NamespacePrefix: null,
      Name: 'Trailhead Event Monitoring'
    },
    SubscriberPackageVersion: {
      attributes: [Object],
      Id: '04t580000003Om4AAE',
      Name: 'Event Monitoring',
      MajorVersion: 1,
      MinorVersion: 3,
      PatchVersion: 0,
      BuildNumber: 1
    }
  },
  {
    attributes: {
      type: 'InstalledSubscriberPackage',
      url: '/services/data/v49.0/tooling/sobjects/InstalledSubscriberPackage/0A33h0000012qKACAY'
    },
    Id: '0A33h0000012qKACAY',
    SubscriberPackageId: '03358000000H11MAAS',
    SubscriberPackage: {
      attributes: [Object],
      NamespacePrefix: null,
      Name: 'Trailhead Data Manager'
    },
    SubscriberPackageVersion: {
      attributes: [Object],
      Id: '04t580000007nMUAAY',
      Name: 'SIC Code update',
      MajorVersion: 2,
      MinorVersion: 4,
      PatchVersion: 0,
      BuildNumber: 1
    }
  },
  {
    attributes: {
      type: 'InstalledSubscriberPackage',
      url: '/services/data/v49.0/tooling/sobjects/InstalledSubscriberPackage/0A33h0000012qKBCAY'
    },
    Id: '0A33h0000012qKBCAY',
    SubscriberPackageId: '033B0000000GWmkIAG',
    SubscriberPackage: {
      attributes: [Object],
      NamespacePrefix: null,
      Name: 'Trailhead Sample App'
    },
    SubscriberPackageVersion: {
      attributes: [Object],
      Id: '04tB0000000HeZHIA0',
      Name: 'Iguana reference line fix',
      MajorVersion: 1,
      MinorVersion: 5,
      PatchVersion: 0,
      BuildNumber: 1
    }
  }
]
```
