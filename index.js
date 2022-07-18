function Hello(){
    let username;
    username = document.getElementById("myText").value;
    if (username!=""){
        document.getElementById("myLabel").innerHTML = "Hello " + username+ "!";
        document.getElementById("myLabel").style.fontSize="20pt";
        div2 = document.getElementById('next2');
        div2.style.display = "none";
        div = document.getElementById('next');
        div.style.display = '';
    } else
        alert("Write a name, please");
} 

function Verificar(){
    let archivo1=[];
    let archivo2=[];
    let archivo3=[];
    let archivo4=[];
    let TXT;
    let excel;
    //const lib = require("./AC");
    archivo1 = document.getElementById("TXT").value.split(".");
    archivo2 = document.getElementById("Excel").value.split(".");
    archivo3 = document.getElementById("TXT").value.split("M");
    archivo4 = document.getElementById("Excel").value.split("_");
    TXT = document.getElementById("TXT").src;
    excel = document.getElementById("Excel").src;
    if(archivo1[1]=="txt" & archivo2[1]=="xlsx"){
        if(archivo3[0]==archivo4[0]){
        //lib.AC(TXT, excel);
        //download(TXT, "hola.txt");
        alert("Your file is downloading" + TXT + excel);   
        } else
        alert("Your project ID are not the same or you do not upload a file in the right format");
    } else
        alert("Some of your files are not .txt or .xlsx, please upload in the right format");   
}

function download(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }
  
  
