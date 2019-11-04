##  FAQ

### How add users into my scratch org?

```
#-----------------------------------------
# list my orgs
#-----------------------------------------

$ sfdx force:org:list 
=== Orgs
     ALIAS     USERNAME                             ORG ID              CONNECTED STATUS
───  ────────  ───────────────────────────────────  ──────────────────  ────────────────
(D)  DevHub    mohan.chinnappan.n.dh1015@gmail.com  00D3k000000tb8CEAQ  Connected
     lwc1_org  mohan.chinnappan.n-hhet@force.com    00DB0000000K3yVMAS  Connected

  ALIAS           SCRATCH ORG NAME     USERNAME                       ORG ID              EXPIRATION DATE
  ──────────────  ───────────────────  ─────────────────────────────  ──────────────────  ───────────────
  MyScratchOrg    mchinnappan Company  test-rxwnugw8bnff@example.com  00D1h0000005Hm3EAE  2019-11-14

#-----------------------------------------
# list the users in the scratch org
#-----------------------------------------

$ sfdx force:user:list -u MyScratchOrg
=== Users in org 00D1h0000005Hm3EAE
     ALIAS         USERNAME                       PROFILE NAME          USER ID
───  ────────────  ─────────────────────────────  ────────────────────  ──────────────────
(A)  MyScratchOrg  test-rxwnugw8bnff@example.com  System Administrator  0051h000002ZIqIAAW

#-----------------------------------------
# add a testuser1 to the scratch org
# let us create a user testuser1 with a email me@mohansun.org
#-----------------------------------------

$  sfdx force:user:create username=testuser1@my.org email=me@mohansun.org -u MyScratchOrg
Successfully created user "testuser1@my.org" with ID [0051h000002k61pAAA] for org 00D1h0000005Hm3EAE.
You can see more details about this user by running "sfdx force:user:display -u testuser1@my.org".

#-----------------------------------------
# let us see the user details for this user
#-----------------------------------------

$ sfdx force:user:display -u testuser1@my.org 
=== User Description
KEY           VALUE
────────────  ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Access Token  00D1h0000005Hm3!ARgAQN9IMhPcOgHaDJIK1zF0ILA3_NyMCtD7qdUL3uDmVLkB_ABQId1UjSHn5Iqv1ToIt.TBh0VNQzUZti0BtrkIAmKuUcCu
Id            0051h000002k61pAAA
Instance Url  https://power-agility-4450-dev-ed.cs79.my.salesforce.com
Login Url     https://CS79.salesforce.com
Org Id        00D1h0000005Hm3EAE
Profile Name  Standard User
Username      testuser1@my.org

#-----------------------------------------
# Let us list the users in this scratch org
#-----------------------------------------

$ sfdx force:user:list -u MyScratchOrg
=== Users in org 00D1h0000005Hm3EAE
     ALIAS         USERNAME                       PROFILE NAME          USER ID
───  ────────────  ─────────────────────────────  ────────────────────  ──────────────────
(A)  MyScratchOrg  test-rxwnugw8bnff@example.com  System Administrator  0051h000002ZIqIAAW
                   testuser1@my.org               Standard User         0051h000002k61pAAA


```

### Doc reference

- [Scratch Org Users](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users.htm)
