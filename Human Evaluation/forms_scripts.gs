function createFormQuestionsFromSheet() {
  //order is negation, mutual exclusion, no info, number swap
  sheet_ids = ['1o-VuoHGLZWRUR0rWcJWOwMXYG8Tts5NAGaKKvnKxiyo']//,'1DD-TEoXSgBDwvxepJYG6pEzjvDfl4wOu35MUA91QGdc', '1niFCNge27neNWOkUzCLSEU9M3wHhL6gjvlb4t3pGuIA', '1qGOVr10KEHAIxrCjYrWfsqiMq3JU4I5t2SaS0jB79bY'];
  form_ids = ['17NMil5ngwX1JX1jWQJYKamzTUdJWL1gPYSZDVW1gxa0']//, '1Zcz6TqT8kQ_6989lOhgX5Qht8gFfQlRph_FIq_5gEkU', '1Lms_Lrr5pTDOjv_aYUPBteJ11KkMZTWR9AYYP56xiuY', '1657k8z44k9K1GNIFFg9W-wR3N_kANmEBR_lY204B81k'];
  for (var k = 0; k < form_ids.length; k++){
    var sheet = SpreadsheetApp.openById(sheet_ids[k]).getSheetByName('Sheet1'); // Replace with your Google Sheet ID and sheet name
    var dataRange = sheet.getDataRange();
    var data = dataRange.getValues();

    // Assuming the first row contains headers
    var headers = data[0];
    var form = FormApp.openById(form_ids[k]); // Replace with your Google Form ID
    var items = form.getItems();
      for (var j = 0; j < items.length; j++) {
        form.deleteItem(items[j]);
      }
    
    if(k != 2){
    for (var i = 1; i < data.length; i++) {
      var question = data[i][headers.indexOf('question')];
      var original_question = data[i][headers.indexOf('original_question')];
      var answer = data[i][headers.indexOf('answer')];
      var context = data[i][headers.indexOf('context')];
      form.addSectionHeaderItem().setTitle('Scenario:')
                                   .setHelpText("\nOriginal Question:\n\n" + original_question + "\n\nOriginal Answer:\n\n" + answer + "\n\nContext:\n\n" + context + "\n\nModified Question:\n\n" + question);
  form.addMultipleChoiceItem()
            .setTitle("Does the modified question have an answer in the paragraph?").setChoiceValues(['0(No Answer)', '1(Existing Answer)']);
            form.addMultipleChoiceItem()
            .setTitle("Is the modified question relevant to the context?").setChoiceValues(['0(No)', '1(Yes)']);
            form.addMultipleChoiceItem()
            .setTitle("Is the modified question clear and readable?").setChoiceValues(['1(No)','2(somewhat)', '3(yes)']);
    }}
    else{
      for (var i = 1; i < data.length; i++) {
      var question = data[i][headers.indexOf('original_question')];
      var answer = data[i][headers.indexOf('answer')];
      var context = data[i][headers.indexOf('context')];
      var ocontext = data[i][headers.indexOf('original_context')];
      form.addSectionHeaderItem().setTitle('Scenario:')
                                   .setHelpText("\nQuestion:\n\n" + question + "\n\nAnswer:\n\n" + answer + "\n\nOriginal Context:\n\n" + ocontext + "\n\nModified Context:\n\n" + context);
  form.addMultipleChoiceItem()
            .setTitle("Does the modified context answer the original question?").setChoiceValues(['0(No)', '1(Yes)']);
            form.addMultipleChoiceItem()
            .setTitle("Is the modified context relevant to the question?").setChoiceValues(['0(No)', '1(Yes)']);
            form.addMultipleChoiceItem()
            .setTitle("Is the modified context clear and readable?").setChoiceValues(['1(No)','2(somewhat)', '3(yes)']);
    }
    }
  }
}