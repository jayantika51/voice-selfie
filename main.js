var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")  {
     console.log("taking selfie in 5 seconds")   
     speak();
    }  
    
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data="Taking Selfie in 5 Seconds";
    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function() {
       start(); 
       save();
    }, 5000);
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("logo_img").scroll;
    link.href = image;
    link.click();
}
 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera=document.getElementById("camera");

function start()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="logo_img" src="'+data_uri+'">';
    });
}
