$(document).ready(function() {
  $("#submitButton").click(function(){
    if($('#userFile').val().length > 0)
    {
      $(':input[id="userInput"]').val(null);
      var file = $('userFile').val();
      var filename = $('input[type=file]').val().replace(/.*(\/|\\)/, '');
      var length = filename.length;
      var i = filename.lastIndexOf('.');
      var exten = filename.substring(i,length);
      if(!exten.match(".java")){
        alert("This need to be a java file");
      }
    }else{
      var text = $('#userInput').val();
    }
  });
});
