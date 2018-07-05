var jwt = require('jwt-simple');
var MongoClient = require('mongodb').MongoClient;
var mongoADDR = process.env.MONGOADDR || 'localhost:27017';
var url = 'mongodb://' + mongoADDR + '/glidr';
var models = require('./model.js');
var jwtKey = process.env.JWTKEY || "cuSvV98uhcuYa4bjFEwhxka2XolF4JOHxmw_nG1N_Pp5vl7o3PGdTIzboVEpMRnNWVCguUdiR7AYJ9TgPqPA_pKYx_WCZqVT2mQDZr1AC-y6foa_vDGqRMneydfHsViDn2C7yGXrDpS1xkKGmZ_iVK5OE5IT8XQhsZsavJ1rBox9DP-66omkilnhpZFEbpZZoBMxvpTnqGVGFxgkZVIRZpG_j1P29pzsuAcLaMJtpFsigLSEWNUoyKehK1wnjq_1UMhvuG5nG1ESCpgop7HQegVSXCxmIK6861OJJ8wONex2AWibgYXnctq9hkcH8116z82YCXj40UqdGM1XPyjtig"

var _db;




exports.createToken = createToken = function(payload, daysToExpire){
  payload.expiresInDays = daysToExpire;
  return jwt.encode(payload, jwtKey, 'HS512')
}

exports.connectToDB = function(callback){
  MongoClient.connect(url, function(err,db){
    if(err){
      console.log('Unable to connect to the mongoDB server. Error:', err);
      return;
    }
    callback(db);
  })
}

var connectToServer = function(callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) console.log(err);
    _db = db;
    callback()
  });
};

exports.connect = connect = function() {
    return _db
};


exports.initializeCanvas = function(callback) {
  connectToServer(function(){
    connect().collection('organizations', function(err, orgColl){
      if (error(err)) return;
      orgColl.remove({slug: models.org.slug}, function(){
        orgColl.insert(models.org)
        connect().collection('users', function(err, userColl){
          if (error(err)) return; 
          userColl.remove({firstName: "Daryl", lastName:"Hall"}, function(){
            userColl.insert(models.user)

            var token = models.cookie
            token.value = createToken({
              profileId: models.user.profiles[0]['_id'],
              organizationId: models.org['_id'],
              projectId: models.org.projects[0]["_id"]
            }, 3)
            callback(token)
            
          })
        })
        
      })
    })
  })
}

var getCanvasId = function(card, callback){
  connect().collection('organizations', function(err, orgColl){
    if (error(err)) return;
    orgColl.findOne({"slug" : "yachtrockers"}, function(err, org){
      if (error(err)) return;
      callback(card)
    })
  })
}

exports.insertCard = function(card, date, callback){
  card.createdAt = date;
  card.updatedAt = date;
  card.projectId = models.org.projects[0]["_id"];
  connect().collection('cards', function(err, cardColl){
    if (error(err)) return;
    cardColl.insert(card)
    callback()
  })
}

exports.removeAllCards = function(callback){
  connect().collection('cards', function(err, cardColl){
    if (error(err)) return;
    cardColl.remove({"projectId": models.org.projects[0]["_id"]}).then(function(){
      callback()
    })
  })
}

exports.setProjectDate = function(date, callback) {
  connect().collection('organizations', function(err, orgColl){
    if (error(err)) return;
    orgColl.update({"slug" : "yachtrockers"}, {$set:{"projects.0.createdAt": date}}, function(){
      callback()
      
    })
  })
}
exports.error = error = function(err){
  if (err){
    console.log('error', err)
    return true
  }
  return false
}

exports.deepCopy = deepCopy = function(source, destination){
  destination = destination || (source.constructor === Array ? [] : {})
  for (var key in source){
    if (source[key].constructor === Object){
      destination[key] = deepCopy(source[key], {})
    }else if(source[key].constructor === Array){
      destination[key] = deepCopy(source[key], [])
    }else{
      destination[key] = source[key]
    }
  }
  return destination
}
