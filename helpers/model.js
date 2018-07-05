var ObjectId = require('mongodb').ObjectId;
exports.url = process.env.URL || 'http://local.glidr.io';
exports.pause = parseInt(process.env.PAUSE) || 0;
exports.uploadPause = parseInt(process.env.UPLOAD_PAUSE) || 0

exports.cookie = {
  "_id" : ObjectId("569fece2f21c407839409b4b"),
  "path" : "/",
  "domain" : exports.url.replace('http://', ''),
  "name" : "token",
  "httpOnly" : false,
  "expiry" : 999453580644,
  "hCode" : 110541305,
  "secure" : false,
  "value" : "",
  "class" : "org.openqa.selenium.Cookie"
}

exports.interviewCard = {
  "_id" : ObjectId("573bb6ffe24677669122a582"),
  "projectId " : ObjectId("569e9caf7cf18c0691f766cc"),
  "cardId" : ObjectId("573bb6ffe24677669122a581"),
  "createdBy" : ObjectId("56d88794e2467743923e99d6"),
  "updatedBy" : ObjectId("56d88794e2467743923e99d6"),
  "createdAt" : new Date(),
  "updatedAt" : new Date(),
  "deletedAt" : new Date(),
  "resurfacedAt" : new Date(),
  "changes" : [ ],
  "version" : 1,
  "obsolete" : false,
  "draft" : true,
  "editing" : false,
  "connections" : [ ],
  "media" : [ ],
  "comments" : [ ],
  "tags" : [ ],
  "type" : "interview",
  "interview" : {
    "keyInsights" : "",
    "notes" : "",
    "method" : "videoConference",
    "date" : new Date(),
    "interviewees" : [ ]
  }
}

exports.card = {
  "_id" : ObjectId("5747e6e4e2467773d646ee7b"),
  "projectId " : ObjectId("569e9caf7cf18c0691f766cc"),
  "cardId" : ObjectId("5747e6e4e2467773d646ee7a"),
  "createdBy" : ObjectId("56d88794e2467743923e99d6"),
  "updatedBy" : ObjectId("56d88794e2467743923e99d6"),
  "createdAt" : new Date(),
  "updatedAt" : new Date(),
  "deletedAt" :  new Date(),
  "resurfacedAt" : new Date(),
  "changes" : [ ],
  "version" : 1,
  "obsolete" : false,
  "draft" : false,
  "editing" : false,
  "connections" : [ ],
  "rating" : {
    "sum" : 0,
    "count" : 0
  },
  "media" : [ ],
  "comments" : [ 
    {
      "_id": ObjectId("5747e6e4e2467773d646ee1a"),
      "owner": ObjectId("5747e6e4e2467773d646ee2a"),
      "cardId": ObjectId("5747e6e4e2467773d646ee7a"),
      "body": "comment from other user",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }
  ],
  "tags" : [ ],
  "type" : "hypothesis",
  "hypothesis" : {
    "title" : "card",
    "summary" : "",
    "canvasSection" : "keyPartners",
    "status" : {
      "name" : "inTesting",
      "updated" : new Date()
    }
  }
}

exports.connectedCards = [
  {
    "_id" : ObjectId("569e9caf7cf18c0691f766c2"),
    "projectId " : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "hypothesis",
    "hypothesis" : {
      "canvasSection" : "keyPartners",
      "title" : "Key Partner",
      "summary" : "",
      "status" : {
        "name" : "inTesting",
        "updated" : new Date()}
    },
    "createdAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "updatedAt" : new Date(),
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766c1"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766cb"), "rating":0},
      {"id":ObjectId("569e9caf7cf18c0691f766c7"), "rating":2},
      {"id":ObjectId("569e9caf7cf18c0691f766c8"), "rating":1}
    ],
    "rating" : {"count": 2, "sum": 3},
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  },  
  {
    "_id" : ObjectId("569e9caf7cf18c0691f766c4"),
    "projectId" : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "hypothesis",
    "hypothesis" : {
      "canvasSection" : "valuePropositions",
      "title" : "Value Proposition",
      "summary" : "",
      "status" : {
        "name" : "inTesting",
        "updated" : new Date()}
    },
    "createdAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "updatedAt" : new Date(),
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766c2"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766cb"), "rating":0}
    ],
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  },
  {
    "_id" : ObjectId("569e9caf7cf18c0691f766c6"),
    "projectId" : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "hypothesis",
    "hypothesis" : {
      "canvasSection" : "costStructure",
      "title" : "Cost Structure",
      "summary" : "",
      "status" : {
        "name" : "inTesting",
        "updated" : new Date()}
    },
    "createdAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "updatedAt" : new Date(),
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766c3"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766cb"), "rating":0}
    ],
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  }, 
  {
    "_id" : ObjectId("569e9caf7cf18c0691f766c5"),
    "projectId" : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "hypothesis",
    "hypothesis" : {
      "canvasSection" : "channels",
      "title" : "Channels",
      "summary" : "",
      "status" : {
        "name" : "inTesting",
        "updated" : new Date()}
    },
    "createdAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "updatedAt" : new Date(),
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766c4"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766cb"), "rating":0}
    ],
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  },
  {
    "_id" : new ObjectId(),
    "projectId " : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "hypothesis",
    "hypothesis" : {
      "canvasSection" : "revenueStreams",
      "title" : "Revenue Stream",
      "summary" : "",
      "status" : {
        "name" : "inTesting",
        "updated" : new Date()}
    },
    "createdAt" : new Date(),
    "updatedAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766c5"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766cb"), "rating":0}
    ],
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  },
  {
    "_id" : new ObjectId(),
    "projectId " : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "hypothesis",
    "hypothesis" : {
      "canvasSection" : "customerSegments",
      "title" : "Customer Segment",
      "summary" : "",
      "status" : {
        "name" : "inTesting",
        "updated" : new Date()}
    },
    "createdAt" : new Date(),
    "updatedAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766cb"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766c1"), "rating":0},
      {"id":ObjectId("569e9caf7cf18c0691f766c2"), "rating":0},
      {"id":ObjectId("569e9caf7cf18c0691f766c3"), "rating":0},
      {"id":ObjectId("569e9caf7cf18c0691f766c4"), "rating":0},
      {"id":ObjectId("569e9caf7cf18c0691f766c5"), "rating":0},
      {"id":ObjectId("569e9caf7cf18c0691f766c6"), "rating":0}
    ],
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  },
  {
    "_id" : ObjectId("569e9caf7cf18c0691f766c3"),
    "projectId " : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "hypothesis",
    "hypothesis" : {
      "canvasSection" : "keyActivities",
      "title" : "Key Activity",
      "summary" : "",
      "status" : {
        "name" : "inTesting",
        "updated" : new Date()}
    },
    "createdAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "updatedAt" : new Date(),
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766c6"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766c5"), "rating":0}
    ],
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  },
  {
    "_id" : new ObjectId(),
    "projectId" : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "interview",
    "interview" : {
      "keyInsights" : "Key Insight",
      "notes" : "",
      "method" : "inPerson",
      "date" : new Date(),
      "interviewees" : [
        {
          "name": "Test User Name",
        }
      ]
    },
    "createdAt" : new Date(),
    "updatedAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766c7"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766cb"), "rating":0}
    ],
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  },
  {
    "_id" : new ObjectId(),
    "projectId" : ObjectId("569e9caf7cf18c0691f766cc"),
    "type": "post",
    "post" : {
      summary : "This is the post Summary"
    },
    "createdAt" : new Date(),
    "updatedAt" : new Date(),
    "resurfacedAt" : new Date(),
    "changes" : [],
    "deletedAt" : "",
    "version" : 1,
    "cardId" : ObjectId("569e9caf7cf18c0691f766c8"),
    "obsolete" : false,
    "connections" : [
      {"id":ObjectId("569e9caf7cf18c0691f766cb"), "rating":0}
    ],
    "draft" : false,
    "tags" : {},
    "updatedBy" : ObjectId("569fece07cf18c331e00002a"),
    "createdBy" : ObjectId("569fece07cf18c331e00002a")
  }
]

exports.userOne = {
  "_id" : ObjectId("569ee8ab67df6f248d000007"),
  "primaryEmail" : "atestemail@mailinator.com",
  "recoveryEmails" : [ ],
  "recoveryPhone" : 0,
  "firstName" : "Daryl",
  "lastName" : "Hall",
  "role" : "",
  "linkedUsers" : [ ],
  "passwordUpdatedAt" : new Date(),
  "passwordHash" : "$2a$10$u6kOXopDQ8Dx2ta7yYjwDeAmhVUdVUt4PbDJGwUCfZthLtoaQPOUW",
  "profiles" : [
    {
      "_id" : ObjectId("569fece07cf18c331e000030"),
      "organizationId" : ObjectId("569d6a9467df6fe384e98907"),
      "organizationName" : "meridaposse",
      "userId" : ObjectId("569ee8ab67df6f248d000007"),
      "firstName" : "Daryl",
      "lastName" : "Hall",
      "email" : "atestemail@mailinator.com",
      "role" : "",
      "slug" : "yachtrockers",
      "createdAt" : new Date(),
      "updatedAt" : new Date(),
      "projects" : [
        {
          "_id" : ObjectId("5776d1bcc3b5a087a50720d9"),
          "name" : "Default"
        }
      ]
    }
  ],
  "retries" : 0,
  "createdAt" : new Date(),
  "updatedAt" : new Date()
}

exports.userTwo = {
  "_id" : ObjectId("56d4d3f7837efe1a4562f47e"),
  "primaryEmail" : "atestemail@mailinator.com",
  "recoveryEmails" : [ ],
  "recoveryPhone" : 0,
  "firstName" : "david",
  "lastName" : "O",
  "role" : "",
  "linkedUsers" : [ ],
  "passwordUpdatedAt" : new Date(),
  "passwordHash" : "$2a$10$u6kOXopDQ8Dx2ta7yYjwDeAmhVUdVUt4PbDJGwUCfZthLtoaQPOUW",
  "profiles" : [
    {
      "_id" : ObjectId("56d4d3f7837efe1a4562f47e"),
      "organizationId" : ObjectId("569fece07cf18c2738dc82cb"),
      "organizationName" : "meridaposse",
      "userId" : ObjectId("5776d1bcc3b5a087a324a099"),
      "firstName" : "Bill",
      "lastName" : "Braski",
      "email" : "atestemail@mailinator.com",
      "role" : "",
      "nickname" : "yachtrockers",
      "createdAt" : new Date(),
      "updatedAt" : new Date(),
      "projects" : [
        {
          "_id" : ObjectId("56d4d3f7837efe1a4562f47e"),
          "name" : "Default"
        }
      ]
    }
  ],
  "retries" : 0,
  "createdAt" : new Date(),
  "updatedAt" : new Date()
}

exports.orgOne = {
  "_id" : ObjectId("569d6a9467df6fe384e98907"),
  "createdAt" : new Date(),
  "updatedAt" : new Date(),
  "projects" : [
    {
      "_id" : ObjectId("5776d1bcc3b5a087a50720d9"),
      "bmc" : [
        {
          "projectId" : ObjectId("569d6a9467df6fe384e98909"),
          "canvasSections" : {
            "costStructure" : "Cost Structure",
            "revenueStreams" : "Revenue Streams",
            "customerRelationships" : "Customer Relationships",
            "channels" : "Channels",
            "customerSegments" : "Customer Segments",
            "valuePropositions" : "Value Propositions",
            "keyPartners" : "Key Partners",
            "keyActivities" : "Key Activities",
            "keyResources" : "Key Resources"
          }
        }
      ],
      "createdAt" : new Date(),
      "updatedAt" : new Date(),    
      "updatedBy" : ObjectId("569fece07cf18c331e000030"),
      "createdBy" : ObjectId("569fece07cf18c331e000030"),
      "private" : false,
      "organizationId" : ObjectId("5776d1bcc3b5a087a50720d8"),
      "description" : "default project",
      "name" : "Default",
      "owner" : ObjectId("569fece07cf18c331e000030")
    }
  ],
  "updatedBy" : ObjectId("569fece07cf18c331e000030"),
  "createdBy" : ObjectId("569fece07cf18c331e000030"),
  "signupDomain" : "zitroarts.com",
  "signupLinkActive" : false,
  "name" : "yacht rockers",
  "slug" : "yachtrockers",
  "owner" : ObjectId("569fece07cf18c331e000030")
}

exports.inviteOne = {
  "_id"     : ObjectId("5699764067df6fce2300001e"),
  "email"   : 'someInvitetestemail@mailinator.com',
  "slug"    : 'yachtrockers',
  "organizationId" : ObjectId("569d6a9467df6fe384e98907"),
  "projectId": ObjectId("569d6a9467df6fe384e98909"),
  "status"  : "invited",
  "organizer": "Daryl Hall",
  "fromLink": false
}

exports.user = {
  "_id" : ObjectId("5776d1bcc3b5a087a324a099"),
  "primaryEmail" : "ishmajana@zitroarts.com",
  "recoveryEmails" : [ ],
  "recoveryPhone" : 0,
  "firstName" : "david",
  "lastName" : "O",
  "role" : "",
  "linkedUsers" : [ ],
  "passwordUpdatedAt" : new Date(),
  "passwordHash" : "$2a$10$u6kOXopDQ8Dx2ta7yYjwDeAmhVUdVUt4PbDJGwUCfZthLtoaQPOUW",
  "profiles" : [
    {
      "_id" : ObjectId("5776d1bcc3b5a087a324a09a"),
      "organizationId" : ObjectId("5776d1bcc3b5a087a50720d8"),
      "organizationName" : "meridaposse",
      "userId" : ObjectId("5776d1bcc3b5a087a324a099"),
      "firstName" : "david",
      "lastName" : "O",
      "email" : "ishmajana@zitroarts.com",
      "role" : "",
      "nickname" : "",
      "createdAt" : new Date(),
      "updatedAt" : new Date(),
      "projects" : [
        {
          "_id" : ObjectId("5776d1bcc3b5a087a50720d9"),
          "name" : "Default"
        }
      ]
    }
  ],
  "retries" : 0,
  "createdAt" : new Date(),
  "updatedAt" : new Date()
}

exports.member1 = {
  "_id" : ObjectId("569fece07cf18c331e000030"),
  "primaryEmail" : "atestemail@mailinator.com",
  "recoveryEmails" : [ ],
  "recoveryPhone" : 0,
  "firstName" : "david",
  "lastName" : "O",
  "role" : "",
  "linkedUsers" : [ ],
  "passwordUpdatedAt" : new Date(),
  "passwordHash" : "$2a$10$u6kOXopDQ8Dx2ta7yYjwDeAmhVUdVUt4PbDJGwUCfZthLtoaQPOUW",
  "profiles" : [
    {
      "_id" : ObjectId("569fece07cf18c331e000030"),
      "organizationId" : ObjectId("569fece07cf18c2738dc82cb"),
      "organizationName" : "meridaposse",
      "userId" : ObjectId("5776d1bcc3b5a087a324a099"),
      "firstName" : "Bill",
      "lastName" : "Braski",
      "email" : "atestemail@mailinator.com",
      "role" : "",
      "nickname" : "yachtrockers",
      "createdAt" : new Date(),
      "updatedAt" : new Date(),
      "projects" : [
        {
          "_id" : ObjectId("5776d1bcc3b5a087a50720d9"),
          "name" : "Default"
        }
      ]
    }
  ],
  "retries" : 0,
  "createdAt" : new Date(),
  "updatedAt" : new Date()
}

exports.member2 = {
  "_id" : ObjectId("569fece07cf18c331e000031"),
  "primaryEmail" : "atestemail@mailinator.com",
  "recoveryEmails" : [ ],
  "recoveryPhone" : 0,
  "firstName" : "david",
  "lastName" : "O",
  "role" : "",
  "linkedUsers" : [ ],
  "passwordUpdatedAt" : new Date(),
  "passwordHash" : "$2a$10$u6kOXopDQ8Dx2ta7yYjwDeAmhVUdVUt4PbDJGwUCfZthLtoaQPOUW",
  "profiles" : [
    {
      "_id" : ObjectId("569fece07cf18c331e000031"),
      "organizationId" : ObjectId("569fece07cf18c2738dc82cb"),
      "organizationName" : "meridaposse",
      "userId" : ObjectId("5776d1bcc3b5a087a324a099"),
      "firstName" : "Bill",
      "lastName" : "Braski",
      "email" : "atestemail@mailinator.com",
      "role" : "",
      "nickname" : "yachtrockers",
      "createdAt" : new Date(),
      "updatedAt" : new Date(),
      "projects" : [
        {
          "_id" : ObjectId("5776d1bcc3b5a087a50720d9"),
          "name" : "Default"
        }
      ]
    }
  ],
  "retries" : 0,
  "createdAt" : new Date(),
  "updatedAt" : new Date()
}


exports.org = {
  "_id" : ObjectId("5776d1bcc3b5a087a50720d8"),
  "createdAt" : new Date(),
  "updatedAt" : new Date(),
  "projects" : [
    {
      "_id" : ObjectId("5776d1bcc3b5a087a50720d9"),
      "bmc" : [
        {
          "projectId" : ObjectId("5776d1bcc3b5a087a50720da"),
          "canvasSections" : {
            "costStructure" : "Cost Structure",
            "revenueStreams" : "Revenue Streams",
            "customerRelationships" : "Customer Relationships",
            "channels" : "Channels",
            "customerSegments" : "Customer Segments",
            "valuePropositions" : "Value Propositions",
            "keyPartners" : "Key Partners",
            "keyActivities" : "Key Activities",
            "keyResources" : "Key Resources"
          }
        }
      ],
      "createdAt" : new Date(),
      "updatedAt" : new Date(),    
      "updatedBy" : ObjectId("5776d1bcc3b5a087a324a099"),
      "createdBy" : ObjectId("5776d1bcc3b5a087a324a099"),
      "private" : false,
      "organizationId" : ObjectId("5776d1bcc3b5a087a50720d8"),
      "description" : "default project",
      "name" : "Default",
      "owner" : ObjectId("5776d1bcc3b5a087a324a099")
    }
  ],
  "updatedBy" : ObjectId("5776d1bcc3b5a087a324a099"),
  "createdBy" : ObjectId("5776d1bcc3b5a087a324a099"),
  "signupDomain" : "zitroarts.com",
  "signupLinkActive" : false,
  "name" : "yacht rockers",
  "slug" : "yachtrockers",
  "owner" : ObjectId("5776d1bcc3b5a087a324a099")
}
