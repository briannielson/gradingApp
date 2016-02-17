function printIt(x){
  document.getElementById('writeArea').innerHTML = x;
}
function store(){
  var x;
  if(document.getElementById("userFile").files.length>0){
    x = document.getElementById("userFile");
    console.log(x.value);
    if(x.value.match(".java")){
      console.log("This is a java file!");
      printIt(x.value);
    }else{
      window.alert("This has to be a java file!");
    }
  }else{
    x = document.getElementById("userInput").value;
    console.log(x);
    printIt(x);
  }
}
