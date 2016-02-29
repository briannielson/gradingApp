$(document).ready(function() {
  $("#submitButton").click(function(){

    if($('#userFile').val().length > 0)
    {
      $(':input[id="userInput"]').val(null);
      var file = $("#userFile").get(0).files;

      var filename = $('input[type=file]').val().replace(/.*(\/|\\)/, '');
      var length = filename.length;
      var i = filename.lastIndexOf('.');
      var exten = filename.substring(i,length);
      if(!exten.match(".java")){
        alert("This needs to be a java file");
      }
    }else{
      var text = $('#userInput').val();
      // conversts text to JSON Object
      var JSON_Text = JSON.stringify({text : text}, null, 1);

    }
  });
});
