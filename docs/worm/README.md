# Write Once Read Many (WORM) notes

## sObject: ContentDocument
- Represents a document that has been uploaded to a library in Salesforce CRM Content or Salesforce Files. 
- [ContentDocument doc](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_contentdocument.htm)


## How to query Salesforce Files using DX
- Represents a specific version of a document in Salesforce CRM Content or Salesforce Files. 
- [ContentVersion doc](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_contentversion.htm?search_text=ContentVersion)
```
$ sfdx force:data:soql:query -q "SELECT Id, ContentAssetId, ContentSize,FileExtension, FileType, Title, SharingPrivacy, OwnerId FROM ContentDocument"  -u mohan.chinnappan.n@org.com
ID                  CONTENTASSETID      CONTENTSIZE  FILEEXTENSION  FILETYPE  TITLE                                         SHARINGPRIVACY  OWNERID
──────────────────  ──────────────────  ───────────  ─────────────  ────────  ────────────────────────────────────────────  ──────────────  ──────────────────
0695w00000ApxvHAAR  null                108          snote          SNOTE     Possible change in order (Sample)             N               0055w00000D53MzAAJ
0695w00000ApxvJAAR  null                204          snote          SNOTE     Final Steps (Sample)                          N               0055w00000D53MzAAJ
0695w00000ApxvKAAR  null                110          snote          SNOTE     Upgrade to X-series (Sample)                  N               0055w00000D53MzAAJ
0695w00000ApxvLAAR  null                163          snote          SNOTE     Delay in order (Sample)                       N               0055w00000D53MzAAJ
0695w00000ApxvIAAR  null                269          snote          SNOTE     Meeting with Howard Jones re: order (Sample)  N               0055w00000D53MzAAJ
0695w00000ApxvMAAR  null                7            snote          SNOTE     Untitled Note                                 N               0055w00000D53MzAAJ
0695w00000ApxvGAAR  null                71           snote          SNOTE     Rachel's Investment Ideas (Sample)            N               0055w00000D53MzAAJ
0695w00000ApxvNAAR  null                286275       pdf            PDF       Enhancing Client Trust (Sample)               N               0055w00000D53MzAAJ
0695w00000ApxvUAAR  03S5w000000JUtiEAG  6565         png            PNG       RB_Console_appicon                            N               0055w00000D53N6AAJ
0695w00000ApxvVAAR  03S5w000000JUtjEAG  6339         png            PNG       RB_appicon                                    N               0055w00000D53N6AAJ
0695w00000ApxvWAAR  03S5w000000JUtkEAG  6654         png            PNG       Wealth_Console_appicon                        N               0055w00000D53N6AAJ
0695w00000ApxvXAAR  03S5w000000JUtlEAG  6156         png            PNG       Wealth_appicon                                N               0055w00000D53N6AAJ
0695w00000ApxvYAAR  03S5w000000JUtmEAG  6541         png            PNG       Insurance_Console_appicon                     N               0055w00000D53N6AAJ
0695w00000ApxvOAAR  03S5w000000JUtcEAG  1495         png            PNG       money_bag                                     N               0055w00000D53MzAAJ
0695w00000ApxvPAAR  03S5w000000JUtdEAG  283          png            PNG       close                                         N               0055w00000D53MzAAJ
0695w00000ApxvQAAR  03S5w000000JUteEAG  1495         png            PNG       money_bag                                     N               0055w00000D53MzAAJ
0695w00000ApxvRAAR  03S5w000000JUtfEAG  283          png            PNG       close                                         N               0055w00000D53MzAAJ
0695w00000ApxvSAAR  03S5w000000JUtgEAG  1495         png            PNG       money_bag                                     N               0055w00000D53MzAAJ
0695w00000ApxvTAAR  03S5w000000JUthEAG  283          png            PNG       close                                         N               0055w00000D53MzAAJ
0695w00000AzVLHAA3  null                110077       pdf            PDF       Apex Unit Testing Guide & Best Practices      N               0055w00000D53MzAAJ
Total number of records retrieved: 20.

```

## sObject ContentVersion

```
sfdx force:data:soql:query -q "SELECT Id, ContentDocumentId,Title, Checksum,ContentLocation,ContentSize,ContentUrl, Origin, VersionData FROM ContentVersion"  -u mohan.chinnappan.n@org.com
ID                  CONTENTDOCUMENTID   TITLE                                         CHECKSUM                          CONTENTLOCATION  CONTENTSIZE  CONTENTURL  ORIGIN  VERSIONDATA
──────────────────  ──────────────────  ────────────────────────────────────────────  ────────────────────────────────  ───────────────  ───────────  ──────────  ──────  ───────────────────────────────────────────────────────────────────────────
0685w00000BFCe7AAH  0695w00000ApxvUAAR  RB_Console_appicon                            6a9feb620cabbd41034e2e6d92c2b6e8  S                6565         null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe7AAH/VersionData
0685w00000BFCe8AAH  0695w00000ApxvVAAR  RB_appicon                                    ae9e31f0a1da8aab7408494c88d8cd9e  S                6339         null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe8AAH/VersionData
0685w00000BFCe9AAH  0695w00000ApxvWAAR  Wealth_Console_appicon                        d3535612c6f4e8b920cb0235262991c1  S                6654         null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe9AAH/VersionData
0685w00000BFCeAAAX  0695w00000ApxvXAAR  Wealth_appicon                                c3be3c8b5e0c3d9d133d95aacc451e76  S                6156         null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCeAAAX/VersionData
0685w00000BFCeBAAX  0695w00000ApxvYAAR  Insurance_Console_appicon                     49375551f9afb7ecdc4f2210814490b7  S                6541         null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCeBAAX/VersionData
0685w00000BFCeCAAX  0695w00000ApxvOAAR  money_bag                                     9defcfffd15d7fee884bb7b735d3f465  S                1495         null        C       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCeCAAX/VersionData
0685w00000BFCeDAAX  0695w00000ApxvPAAR  close                                         b67b981094c76ea6fa3d460480e08148  S                283          null        C       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCeDAAX/VersionData
0685w00000BFCeEAAX  0695w00000ApxvQAAR  money_bag                                     9defcfffd15d7fee884bb7b735d3f465  S                1495         null        C       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCeEAAX/VersionData
0685w00000BFCeFAAX  0695w00000ApxvRAAR  close                                         b67b981094c76ea6fa3d460480e08148  S                283          null        C       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCeFAAX/VersionData
0685w00000BFCeGAAX  0695w00000ApxvSAAR  money_bag                                     9defcfffd15d7fee884bb7b735d3f465  S                1495         null        C       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCeGAAX/VersionData
0685w00000BFCeHAAX  0695w00000ApxvTAAR  close                                         b67b981094c76ea6fa3d460480e08148  S                283          null        C       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCeHAAX/VersionData
0685w00000BFCe6AAH  0695w00000ApxvNAAR  Enhancing Client Trust (Sample)               c43d618994f68f81af73886065aa954b  S                286275       null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe6AAH/VersionData
0685w00000BFCdrAAH  0695w00000ApxvGAAR  Rachel's Investment Ideas (Sample)            f836f89ae8760c12f6857cdd6d83e818  S                106          null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCdrAAH/VersionData
0685w00000BFCe5AAH  0695w00000ApxvGAAR  Rachel's Investment Ideas (Sample)            497abd91a4503563e895bcd920368b3b  S                71           null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe5AAH/VersionData
0685w00000BFCdsAAH  0695w00000ApxvHAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCdsAAH/VersionData
0685w00000BFCdtAAH  0695w00000ApxvIAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCdtAAH/VersionData
0685w00000BFCduAAH  0695w00000ApxvHAAR  Possible change in order (Sample)             2ecf03a097ea5e3ce4626559a3e5ac18  S                108          null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCduAAH/VersionData
0685w00000BFCdvAAH  0695w00000ApxvIAAR  Meeting with Howard Jones re: order (Sample)  f960901125473f1f71f713f7cc66b182  S                269          null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCdvAAH/VersionData
0685w00000BFCdwAAH  0695w00000ApxvJAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCdwAAH/VersionData
0685w00000BFCdxAAH  0695w00000ApxvJAAR  Final Steps (Sample)                          6bedd582a8aaadb2012c61b6588146e6  S                204          null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCdxAAH/VersionData
0685w00000BFCdyAAH  0695w00000ApxvKAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCdyAAH/VersionData
0685w00000BFCdzAAH  0695w00000ApxvKAAR  Upgrade to X-series (Sample)                  16246670e8e76a973481f5ad334637b7  S                110          null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCdzAAH/VersionData
0685w00000BFCe0AAH  0695w00000ApxvLAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe0AAH/VersionData
0685w00000BFCe1AAH  0695w00000ApxvLAAR  Delay in order (Sample)                       270ed6ef472f172206059af18b82cb0f  S                163          null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe1AAH/VersionData
0685w00000BFCe2AAH  0695w00000ApxvIAAR  Meeting with Howard Jones re: order (Sample)  f960901125473f1f71f713f7cc66b182  S                269          null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe2AAH/VersionData
0685w00000BFCe3AAH  0695w00000ApxvIAAR  Meeting with Howard Jones re: order (Sample)  f960901125473f1f71f713f7cc66b182  S                269          null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe3AAH/VersionData
0685w00000BFCe4AAH  0695w00000ApxvMAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H       /services/data/v48.0/sobjects/ContentVersion/0685w00000BFCe4AAH/VersionData
0685w00000BL4efAAD  0695w00000AzVLHAA3  Apex Unit Testing Guide & Best Practices      bea284e62d6e76ee602472064709e398  S                110077       null        C       /services/data/v48.0/sobjects/ContentVersion/0685w00000BL4efAAD/VersionData
Total number of records retrieved: 28.

$ sfdx force:data:soql:query -q "SELECT Id, VersionNumber, ContentDocumentId,Title, Checksum,ContentLocation,ContentSize,ContentUrl, Origin FROM ContentVersion"      -u mohan.chinnappan.n@org.com
ID                  VERSIONNUMBER  CONTENTDOCUMENTID   TITLE                                         CHECKSUM                          CONTENTLOCATION  CONTENTSIZE  CONTENTURL  ORIGIN
──────────────────  ─────────────  ──────────────────  ────────────────────────────────────────────  ────────────────────────────────  ───────────────  ───────────  ──────────  ──────
0685w00000BFCe7AAH  1              0695w00000ApxvUAAR  RB_Console_appicon                            6a9feb620cabbd41034e2e6d92c2b6e8  S                6565         null        H
0685w00000BFCe8AAH  1              0695w00000ApxvVAAR  RB_appicon                                    ae9e31f0a1da8aab7408494c88d8cd9e  S                6339         null        H
0685w00000BFCe9AAH  1              0695w00000ApxvWAAR  Wealth_Console_appicon                        d3535612c6f4e8b920cb0235262991c1  S                6654         null        H
0685w00000BFCeAAAX  1              0695w00000ApxvXAAR  Wealth_appicon                                c3be3c8b5e0c3d9d133d95aacc451e76  S                6156         null        H
0685w00000BFCeBAAX  1              0695w00000ApxvYAAR  Insurance_Console_appicon                     49375551f9afb7ecdc4f2210814490b7  S                6541         null        H
0685w00000BFCeCAAX  1              0695w00000ApxvOAAR  money_bag                                     9defcfffd15d7fee884bb7b735d3f465  S                1495         null        C
0685w00000BFCeDAAX  1              0695w00000ApxvPAAR  close                                         b67b981094c76ea6fa3d460480e08148  S                283          null        C
0685w00000BFCeEAAX  1              0695w00000ApxvQAAR  money_bag                                     9defcfffd15d7fee884bb7b735d3f465  S                1495         null        C
0685w00000BFCeFAAX  1              0695w00000ApxvRAAR  close                                         b67b981094c76ea6fa3d460480e08148  S                283          null        C
0685w00000BFCeGAAX  1              0695w00000ApxvSAAR  money_bag                                     9defcfffd15d7fee884bb7b735d3f465  S                1495         null        C
0685w00000BFCeHAAX  1              0695w00000ApxvTAAR  close                                         b67b981094c76ea6fa3d460480e08148  S                283          null        C
0685w00000BFCe6AAH  1              0695w00000ApxvNAAR  Enhancing Client Trust (Sample)               c43d618994f68f81af73886065aa954b  S                286275       null        H
0685w00000BFCdrAAH  1              0695w00000ApxvGAAR  Rachel's Investment Ideas (Sample)            f836f89ae8760c12f6857cdd6d83e818  S                106          null        H
0685w00000BFCe5AAH  2              0695w00000ApxvGAAR  Rachel's Investment Ideas (Sample)            497abd91a4503563e895bcd920368b3b  S                71           null        H
0685w00000BFCdsAAH  1              0695w00000ApxvHAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H
0685w00000BFCdtAAH  1              0695w00000ApxvIAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H
0685w00000BFCduAAH  2              0695w00000ApxvHAAR  Possible change in order (Sample)             2ecf03a097ea5e3ce4626559a3e5ac18  S                108          null        H
0685w00000BFCdvAAH  2              0695w00000ApxvIAAR  Meeting with Howard Jones re: order (Sample)  f960901125473f1f71f713f7cc66b182  S                269          null        H
0685w00000BFCdwAAH  1              0695w00000ApxvJAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H
0685w00000BFCdxAAH  2              0695w00000ApxvJAAR  Final Steps (Sample)                          6bedd582a8aaadb2012c61b6588146e6  S                204          null        H
0685w00000BFCdyAAH  1              0695w00000ApxvKAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H
0685w00000BFCdzAAH  2              0695w00000ApxvKAAR  Upgrade to X-series (Sample)                  16246670e8e76a973481f5ad334637b7  S                110          null        H
0685w00000BFCe0AAH  1              0695w00000ApxvLAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H
0685w00000BFCe1AAH  2              0695w00000ApxvLAAR  Delay in order (Sample)                       270ed6ef472f172206059af18b82cb0f  S                163          null        H
0685w00000BFCe2AAH  3              0695w00000ApxvIAAR  Meeting with Howard Jones re: order (Sample)  f960901125473f1f71f713f7cc66b182  S                269          null        H
0685w00000BFCe3AAH  4              0695w00000ApxvIAAR  Meeting with Howard Jones re: order (Sample)  f960901125473f1f71f713f7cc66b182  S                269          null        H
0685w00000BFCe4AAH  1              0695w00000ApxvMAAR  Untitled Note                                 d97623d172f087d9640da9acd38830ff  S                7            null        H
0685w00000BL4efAAD  1              0695w00000AzVLHAA3  Apex Unit Testing Guide & Best Practices      bea284e62d6e76ee602472064709e398  S                110077       null        C
Total number of records retrieved: 28.
```

### Metadata

- [ContentVersion Metadata](https://mohan-chinnappan-n.github.io/sfdc/fs-cloud/csv-viewer_fsc.html?f=ContentVersion)


## Possible Solution

 ConventVersion allows multiple versions to upload for the same doc so it is by design, immutable. If we like to prevent the second version to be uploaded after the first version is uploaded,  a trigger on ContentVersion (beforeInsert) can be written to achieve this.
```
 if Convent.VersionNumber != 1  do_not_allow_insert

```
 

