var model = require('../../helpers/model.js');
var controller = require('../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;


module.exports = {
  options : {
   url : model.url + '/canvas'
  },

    before : function(browser, done){
    var context = this
    browser
    .url(this.options.url)
    controller.initializeCanvas(function(token){
      controller.removeAllCards(function(){
        browser.setCookie(token)
        controller.insertCard(model.card, new Date(), function(){
          browser.url(context.options.url)
          browser.windowMaximize().pause(model.pause + 1000)
          done()
        })
      })
    })
  },
  after : function (browser, done) {
    controller.removeAllCards(function(){
      controller.connect().close()
      done()
    });
  },

  'Test image file uploader' : function(browser) {
    browser
    .pause(model.pause + 500)
    .click('.card')
    .pause(model.pause + 500)
    .waitForElementVisible('.card-full-current-card', model.pause + 600)
    .verify.elementPresent('label.full-card-add-icon', 'should be an add media button')
    .verify.elementPresent('input#file-uploader', 'should be an add media field')
    .setValue('input#file-uploader', require('path').normalize(__dirname +'/media/image.jpg')) 
    .pause(model.uploadPause + 1000)
  },
  'Test pdf file uploader' : function(browser) {
    browser
    .pause(model.pause + 500)
    .verify.elementPresent('input#file-uploader', 'should be an add media field')
    .setValue('input#file-uploader', require('path').normalize(__dirname + '/media/pdf-test.pdf')) 
    .pause(model.uploadPause + 1000)
  },
  'Test image media on hypothesis' : function (browser) {
    browser
    .pause(model.pause + 500)
    .verify.elementPresent('.hypothesis-uploaded-media-more', 'should have an overflow media box')
    .verify.elementNotPresent('div#media-container-downloads div > div:nth-child(7)' , 'there should not be a 7th media element')
    .click('.hypothesis-uploaded-media-more')
    .pause(model.pause + 500)
    .verify.elementNotPresent('.hypothesis-uploaded-media-more', 'should show all photos when more media box is clicked')
    .verify.elementPresent('div#media-container-downloads div > div:nth-child(7)' , 'all media should show after media box is clicked')
    .verify.elementPresent('input#file-uploader', 'should still be able to upload files')

  },

  'Test pdf media on hypothesis' : function(browser) {
    browser
    .pause(model.pause + 500)
    .verify.elementPresent('div.hypothesis-media-document',  'pdf should be visible')
    .verify.elementPresent('div.hypothesis-document-icon',  'css representational photo should be present')
    .verify.elementPresent('div.hypothesis-document-filename',  'pdfs should include the file name')
    .setValue('input#file-uploader', require('path').normalize(__dirname + '/media/pdf-test.pdf')) 
    .pause(model.uploadPause+800)
    .verify.elementPresent('div#media-document-uploads > div:nth-child(2)', 'adds a second pdf file')
  },

  'Test media on hover and delete' : function(browser) {
    browser
    .pause(model.pause + 500)
    .moveToElement('div.media-canvas', 5, 5)
    .verify.elementPresent('div.hypothesis-uploaded-media-options', 'media options should be present on hover')
    .verify.elementPresent('div.hypothesis-uploaded-media-download', 'media options should be present on hover')
    .verify.elementPresent('div.hypothesis-uploaded-media-delete', 'media options should be present on hover')
    .moveToElement('div.hypothesis-uploaded-media-delete', 5, 5)
    .click('div.hypothesis-uploaded-media-delete')
    .pause(model.pause + 500)
    .verify.elementPresent('div.hypothesis-uploaded-media-verify-delete', 'should confirm delete on click')
    .click('div.hypothesis-uploaded-media-verify-delete')
    .pause(model.pause + 500)
    .moveToElement('div.hypothesis-media-document', 5, 5)
    .verify.elementPresent('div.hypothesis-media-document', 'pdfs should also have delete and download options')
    .verify.elementPresent('div.hypothesis-document-icon', 'pdfs should also have delete and download options')
    .verify.elementPresent('div.hypothesis-document-filename', 'pdfs should also have delete and download options')
    .verify.elementPresent('div.hypothesis-uploaded-document-options', 'pdfs should also have delete and download options')
    .click('div.hypothesis-uploaded-document-delete')
    .waitForElementVisible('div.hypothesis-uploaded-document-verify-delete', model.pause + 500)
    .click('div.hypothesis-uploaded-document-verify-delete')
    .end()
  }
}
