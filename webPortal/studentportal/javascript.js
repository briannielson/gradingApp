$(document).ready(function() {
  $('#userFile').change(function(){
      $(':input[id="userInput"]').val(null)//.slideUp();
  });
  $("#submitButton").click(function(){
    var jOb;
          if($('#userFile').val().length > 0)
          {
            var file = $('#userFile').get(0).files;
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
            var today = new Date();
            var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
            Cookies.set('textCookie',text);
            if(Cookies.get().length() > 0){
              console.log("yes");
            }else{
              console.log("no");
            }
          }
    });
});
