var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function iniciar(){
    document.getElementById("text-box").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("text-box").innerHTML=Content;
    if (Content=="selfie"){
        console.log("tirando selfie")
        Speech();
    }
}
function Speech(){
    var Synth = window.speechSynthesis;
    SpeechData = "tirando sua selfie em 5 segundos";
    var ulterdis = new SpeechSynthesisUtterance(SpeechData);
    Synth.speak (ulterdis);
    Webcam.attach(camera);
    setTimeout(function ()  {
        takeSelfie();
        saveSelfie();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width : 360, 
    height : 250,
    image_format : "jpeg",
    jpeg_quality : 90
});
function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML='<img id="selfieimage" src="'+data_uri+'">'
    });
}
function saveSelfie(){
    link=document.getElementById("link");
    image=document.getElementById("selfieimage").scr;
    link.href=image;
    link.click();
    
}