
//This Part Plays the Instrument when the Image Is clicked
for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonLetter = this.innerHTML;
        triggerAudio(buttonLetter);
        
    })
}

//This Part Plays the Instrument when the keyboard letters are pressed
document.addEventListener("keydown", function(event){
    triggerAudio(event.key);
    
});

//This is the Function that Actually plays the sound
function triggerAudio(fileLetter) {
    letters = ["W","w", "A", "a", "S", "s", "D", "d", "J", "j", "K", "k", "L", "l"];
    if (letters.includes(fileLetter)) {
      var audiofile= "./sounds/" + fileLetter + ".mp3";
      var audio = new Audio(audiofile); 
      audio.play();  

      var activeButton = document.querySelector("." + fileLetter);
      activeButton.classList.add("pressed");
     
      recordBeat(fileLetter);
    }
    }

//When the button is depressed remove the class pressed of the button
document.addEventListener("keyup", function(event){
    letters = ["W","w", "A", "a", "S", "s", "D", "d", "J", "j", "K", "k", "L", "l"];
    if (letters.includes(event.key)) {
        var activeButton = document.querySelector("." + event.key);
        activeButton.classList.remove("pressed");
    }
    
})

var beatRecordArray = "";
document.querySelector(".beatrecord").innerHTML = beatRecordArray; 

//Add letter to the record and paragraph
function recordBeat(beatWord){
    beatRecordArray = beatRecordArray + beatWord;
    document.querySelector(".beatrecord").innerHTML = beatRecordArray; 
    
}

//clear the beat record list
document.querySelector(".clearbtn").addEventListener("click", function () {
    beatRecordArray = "";
    document.querySelector(".beatrecord").innerHTML = beatRecordArray;
})

//Play beat sequence that is on the record list
document.querySelector(".playbtn").addEventListener("click", function(){
    playRecord(0);
    document.querySelector("#title").innerHTML = "🎶Playing Your Beat🎵";
});


function playRecord(n) {
        
        var audiofile= "./sounds/" + (beatRecordArray[n]) + ".mp3";
        var audio = new Audio(audiofile); 
        audio.play();

        if (n<(beatRecordArray.length-1)) {
            setTimeout(function(){playRecord(n+1)}, 500);
        } else {
            document.querySelector("#title").innerHTML = "Drum 🥁 Kit";
        }
        
     
}

