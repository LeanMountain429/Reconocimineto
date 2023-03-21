Webcam.set({
    width: 300,
    height: 400,
    image_format:'png',
    png_quality: 90
})
var webcama= document.getElementById("david")
Webcam.attach(webcama)
function xd(){
    Webcam.snap(function(data_uri){
        document.getElementById("f328472398a7489375r98347r8978932754i73848723d734827427").innerHTML= '<img id="img" src='+data_uri+'>'
    })
}
var modelo_entrenado= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wZwqCKes2/model.json",muchooo_maincraaa_infinito)
function muchooo_maincraaa_infinito(){
    console.log ("Modelo listo!!!")
}
console.log ("version de ml5",ml5.version)
function equisde(){
    var xde= document.getElementById("img")
    modelo_entrenado.classify(xde,jeje)
}
function jeje(error,results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("dxxd").innerHTML= results[0].label
        document.getElementById("dxxddx").innerHTML= results[0].confidence.toFixed(3)
    }
}