$(document).ready(function() {
  $('#userFile').change(function(){
      $(':input[id="userInput"]').val(null)//.slideUp();
  });
  $("#submitButton").click(function(){
<<<<<<< HEAD
    var jOb;
    var x;
          if($('#userFile').val().length > 0)
          {
            var file = $('#userFile').get(0).files;
            var fileString = String(file);
            var filename = $('input[type=file]').val().replace(/.*(\/|\\)/, '');
            var length = filename.length;
            var i = filename.lastIndexOf('.');
            var exten = filename.substring(i,length);
            if(!exten.match(".java")){
              $(':input[id="userFile"]').val(null);
              alert("This need to be a java file");
            }
            jOb = {"file":file};
          }else{
            var text = $('#userInput').val();
            jOb ={"text":text};
          }
=======

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
>>>>>>> 58c1354f839b1956f5be2813c66e1880c8c9bb98
  });
});
