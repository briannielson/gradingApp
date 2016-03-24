$(document).ready(function() {
  $('#userFile').change(function(){
      $(':input[id="userInput"]').val(null)//.slideUp();
  });
  $("#submitButton").click(function(){
          if($('#userFile').val().length > 0)
          {
            // Use FileReader()
          } else {
            var text = $('#userInput').val();
            var cookieName = "textCookie";
            document.cookie = cookieName + "=" + text+";";
          }
          $("#form").submit();
    });
});
