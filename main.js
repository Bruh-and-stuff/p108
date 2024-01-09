//https://teachablemachine.withgoogle.com/models/uKAYg3Pkm/model.json
function startrecord(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uKAYg3Pkm/model.json", modelLoad)
}
    function modelLoad(){
        console.log("We have loaded")
        classifier.classify(gotResults)
    }

    function gotResults(error, result){
        if(error){
            console.error(error)
        }
        else{
            console.log(result)
            r = (Math.random())*255
            g = (Math.random())*255
            b = (Math.random())*255

            document.getElementById("bark").style.color = "rgb("+r+","+g+","+b+")"
            document.getElementById("meow").style.color = "rgb("+r+","+g+","+b+")"
            document.getElementById("growl").style.color = "rgb("+r+","+g+","+b+")"
            document.getElementById("moo").style.color = "rgb("+r+","+g+","+b+")"

            if(result[0].label = "Dog"){
                dog = dog+1
                document.getElementById("bark").innerHTML = dog
                 
            }
            else if(result[0].label = "Cat"){
                cat = cat+1
                document.getElementById("meow").innerHTML = cat
                 
            }
            else if(result[0].label = "Bear"){
                bear = bear+1
                document.getElementById("growl").innerHTML = bear
                 
            }
            else if(result[0].label = "Cows"){
                cow = cow+1
                document.getElementById("moo").innerHTML = cow
                 
            }
            else if(result[0].label = "Background Noise"){
                console.log("background noise detected")
            }
        }
    }
    var dog = 0
    var cat = 0
    var bear = 0
    var horse = 0
    