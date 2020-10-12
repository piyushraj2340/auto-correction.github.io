// accordion function 


/* //var accLeft = document.getElementsByClassName("accordion-left");  
//var accRight = document.getElementsByClassName("accordion-right");

var i, panel;

for (i = 0; i < accLeft.length; i++) {
	accLeft[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		}
		else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	})
} */



var buttn = document.getElementsByClassName("btn");  //defining the buttn

for (i = 0; i < buttn.length; i++) {  // creating the for loop 
	buttn[i].addEventListener("click", function() { // defining the function 
		this.classList.toggle("active");  // toggle class list 'active'
		var panel = this.parentElement.nextElementSibling; // defining the Element  panel 
		if(panel.style.maxHeight) {  //  defining the condition for having the maxHeight
			panel.style.maxHeight = null; // remove the maxHeight
		}
		else {
			panel.style.maxHeight = panel.scrollHeight + "px"; // give the maxHeight to auto and animation effect 
		}
	})
}

// filter function on left and right both 

var buttnLeft = document.querySelectorAll("#aside-left .accordion-container .btn");
var buttnRight = document.querySelectorAll("#aside-right .accordion-container .btn");

var labelLeft = document.querySelectorAll("#aside-left .input-field .label")[0];
var labelRight = document.querySelectorAll("#aside-right .input-field .label")[0];

labelLeft.innerHTML = buttnLeft.length;
labelRight.innerHTML = buttnRight.length;

 
function filterFunctionLeft() {
	 var input, filter, button, txtValue, i, label;
	 
	 input = document.getElementById("search-left");
	 filter = input.value.toUpperCase();
	 butt = document.querySelectorAll("#aside-left .accordion-container .btn");
	 label = input.nextElementSibling;
	 
	 var buttArray = [].slice.call(butt);
	 
	 
	 for (i = 0; i < butt.length; i++) {
		   txtValue = butt[i].textContent || butt[i].innerText;
		 
		    var panel = butt[i].parentElement.nextElementSibling;
		    butt[i].classList.remove("active");
	 
	        panel.style.maxHeight = null;
		 
		    if (txtValue.toUpperCase().indexOf(filter) > -1) {
			     butt[i].style.display = "";
		    }
		 
		    else {
			     butt[i].style.display = "none";
		    }
			
			var displayShow = buttArray.filter(function(elem) {
		     return getComputedStyle(elem).display !== "none";
	        });
			
			label.innerHTML = displayShow.length;
	    } 
 }
 
 
 function filterFunctionRight() {
	 var input, filter, button, txtValue, i;
	 
	 input = document.getElementById("search-right");
	 filter = input.value.toUpperCase();
	 butt = document.querySelectorAll("#aside-right .accordion-container .btn");
	 
	 label = input.nextElementSibling;
	 
	 var buttArray = [].slice.call(butt);
	 
	 for (i = 0; i < butt.length; i++) {
		   txtValue = butt[i].textContent || butt[i].innerText;
		 
		    var panel = butt[i].parentElement.nextElementSibling;
		    butt[i].classList.remove("active");
	 
	        panel.style.maxHeight = null;
		 
		    if (txtValue.toUpperCase().indexOf(filter) > -1) {
			     butt[i].style.display = "";
		    }
		 
		    else {
			     butt[i].style.display = "none";
		    }
			
			var displayShow = buttArray.filter(function(elem) {
		     return getComputedStyle(elem).display !== "none";
	        });
			
			label.innerHTML = displayShow.length;
			
	    } 
 }
 
 
 // counting function 
 
 var count = 0;  // menu count variable 
 
 var menuCount = (function (){  // menu count function 
	 return function () {
		 count += 1;
		 return count;
	 }
 })();
 
 var countInputNum = 0;  //  count next button variable 
 
 
 var countInput = (function () {  // count next button function 
	 return function() {
		 countInputNum += 1;
		 
		 return countInputNum;
	 }
 })();
 
 
 // menu function 
 
 function menuFunction(x) {  // menu function 
	 var navUl, header;
	 
	 nav = document.getElementById("nav");
	 
	 
	 
	 if(menuCount() % 2 == 0) {
		 nav.style.maxHeight = null;
	 }
	 
	 else {
         nav.style.maxHeight = 	nav.scrollHeight + "px";
	 }
	 
	 
	 x.classList.toggle("change");
	 
 }
 
 // login function 
 
 
 function loginFunction() {   // login function 
	 var usdId, usdPasd, loginForm, content, loginAlert, userId, userPasd;
	 usdId = document.getElementById("userid").value;
	 usdPasd = document.getElementById("user-pasd").value;
	 loginForm = document.getElementById("login-form");
	 content = document.getElementById("content");
	 loginAlert = document.getElementById("alert");
	 userId = "20bcs19";
     userPasd = "cuchd";	 
	 
	 if(usdId === userId && usdPasd === userPasd) {
		 loginForm.style.display = "none";
		 content.style.display = "block";
	 }
	 else {
		 loginAlert.style.display = "block";
	 }
 }
 
 // dictation function open and close 
 
 
 function dictationOpen() {  // dictation open function 
	 
	 var dictation = document.getElementById("dictation");
	 var content = document.getElementById("content");
	 if(getComputedStyle(content).display !== "none") {
		 //content.style.opacity = "0";
	     dictation.style.height = dictation.scrollHeight + "px";
	     dictation.style.padding = "40px 0px 10px 0px";
	     dictation.style.boxShadow = "0px 5px 10px 0px lightblue, 0px 7px 5px 0 #000, 0 6px 10px 0 #fff";
		 dictation.style.border = "2px solid lightblue";
		 
	 }
	 else {
		 alert("You Are Not Login into this.");
	 }
	
	 
 }
 
 function dictationClose() {  // dictation close function 
	 var dictation = document.getElementById("dictation");
	 var content = document.getElementById("content");
	 dictation.style.height = null;
	 dictation.style.padding = null;
	 dictation.style.boxShadow = null;
	 dictation.style.border = null;
	 
	 content.style.opacity = "1";
 }
 




 
 // speech function control 
 
 
 var voiceList = document.getElementById("voiceList"); 
 
 var tts = window.speechSynthesis;  // define the text to speech api 
 
 var voices = []; // making the array to store the different voice List in select Elements with Options
 
 GetVoices();  // call the function for Firefox Browser 
 
 if(speechSynthesis !== undefined) {  // call the function for the Chrome 
	 speechSynthesis.onvoiceschanged = GetVoices;
 }
 
 // making the function to have the voice list 
 
 function GetVoices() {  // create the function to have select list for voice or voice list in select tags 
	 voices = tts.getVoices();  // get the number of voice list in the device 
	 voiceList.innerHTML = "";  // clear all the data inside the select elements 
	 voices.forEach((voice)=> { // create the function for each option 
		var listItem = document.createElement("option"); // create the elements option 
        listItem.textContent = voice.name;  // get the voice name 
        listItem.setAttribute("data-lang", voice.lang); // set the voice lang eg: "en-IN"
        listItem.setAttribute("data-name", voice.name); // set the voice name eg: "hindi"
		voiceList.appendChild(listItem); // append the listItem into the VoiceList
	 });
	 
	 voiceList.selectedIndex = 0;  // by Defaults its select the first option 
 }
 
 // testing for global variable
 
    var dataAccess, storeWord;
 
    dataAccess = document.getElementsByClassName("btn");
	
	storeWord = []; // making the array to store the words 
	
	for(i = 0; i < dataAccess.length; i++) { 
		    storeWord[storeWord.length]= dataAccess[Math.floor(Math.random() * dataAccess.length)].innerHTML
		}
 
  controlTTS();
  
  // controlTTS is control the text to speech output 
 
 function controlTTS() {  // create the function to have control dashboard for text to speech output
 
    // control of slide and output of slide 
	
	var slider = document.getElementsByClassName("slider");  // define the slide control 
    var output = document.getElementsByClassName("value");  // define the output or slide result 
	
	for(i = 0; i < slider.length; i++) {  // making the loop function to have a result for the slider in output
	    output[i].innerHTML = slider[i].value;
	  
	   var x;
	  
	   slider[i].oninput = function() {    // making the function for slide control output 
	   
	   output = this.parentNode.previousElementSibling.childNodes[1];  // defining the span element for output data slide 
		
	   output.innerHTML = this.value;  // output for slide 
		
	}
	
	}


   // text message output speech 
	
	
	var toSpeak = new SpeechSynthesisUtterance(); // provide the text massege to speak
	
	var volume = document.getElementById("volume"); // volume control 
    var rate = document.getElementById("rate");  // rate control 
    var pitch = document.getElementById("pitch"); // pitch control
	
	var volumeCount = (function() { // getting the date form volume slide control
		 return function() {
			 volume.addEventListener("input" , function () {
				 this.value;
			 });
			 return volume.value;
		 }
	})();
	
	var rateCount = (function() { // getting the data form the rate slide control 
		 return function () {
			 rate.addEventListener("input" , function () {
				this.value; 
			 });
			 return rate.value;
		 }
	})();
	
	var pitchCount = (function() {  // getting the data form the pitch slide control 
		 return function () {
			 pitch.addEventListener("input" , function () {
				 this.value;
			 });
			 return pitch.value;
		 }
	})();
	
	function speechData() {  // making the function to have speech data message output 
		
		var selectedVoiceName = voiceList.selectedOptions[0].getAttribute("data-name");  // voice list name select 
        voices.forEach(function(voice) { // for each option making function  
            if(voice.name === selectedVoiceName) {  // condition to check weather the selected voice list is true or not 
			     toSpeak.voice = voice;  // speech output 
		    }
	    });	
		
	     toSpeak.voiceURI = "native";
	     toSpeak.volume = volumeCount(); // volume data
	     toSpeak.rate = rateCount();  // rate data
	     toSpeak.pitch = pitchCount(); // pitch data 
	     toSpeak.lang = "en-IN";  // language data 
	}
	
	var speechBtn = document.querySelectorAll(".btn + i"); // selecting for speak button 
	
	for(i = 0; i < speechBtn.length; i++) {   // 
	    speechBtn[i].addEventListener("click", function() {
	       var mesg = this.previousElementSibling.innerHTML;
		
	       toSpeak.text = mesg;
		   
		   speechData();
		 
	       tts.speak(toSpeak);
	    
	   });
    }
	
	var speechLi = document.querySelectorAll(".panel ul li i");
 
    for(i = 0; i < speechLi.length; i++) {
	    speechLi[i].addEventListener("click", function() {
		   var mesg = this.previousElementSibling.innerHTML;
		
	       toSpeak.text = mesg;
		   
		   speechData();
		 
	       tts.speak(toSpeak);
	    });
    }
		
  creatInputSpeech = function() {  // making the global function to have create test or having next control 
	 
	 var testPanelControl, cretTestPanel, cretTestPanelItem, createcountNumb, creatInput, createspeechOutput, addClass, dictation, inputSpeech, starButtn, nextButtn, printButtn, numbOfWord, dataAccess, speechOutput;
	 
	 dictation = document.getElementById("dictation");
	 
	 testPanelControl = document.getElementById("testPanelControl");
	 
	 numbOfWord = document.getElementById("numbWord").value;
	
	 dataAccess = document.getElementsByClassName("btn");
	
	 testArray = storeWord[countInput()-1]; // making the array to store the words
	 
	  
	if(numbOfWord >  0) { 
	 
	    // creating div with testPanel class 
	     cretTestPanel = document.createElement("div");
	     cretTestPanel.classList.add("testPanel");
	 
	    // creating div with testPanel-item
	     cretTestPanelItem = document.createElement("div");
	     cretTestPanelItem.classList.add("testPanel-item");
	 
	    // creating span for counting 
	     createcountNumb = document.createElement("span");
	     createcountNumb.classList.add("countNumb");
	
	    // creating the input for giving test 
	     creatInput = document.createElement("input");
	     creatInput.setAttribute("type","text");
	     creatInput.setAttribute("id","inputSpeech");
	     creatInput.setAttribute("placeholder","Enter the word");
	     creatInput.setAttribute("spellcheck","false");
	     creatInput.classList.add("inputSpeech");
	 
	    // creating the speak button to dictate the word 
	     createspeechOutput = document.createElement("button");
	     createspeechOutput.classList.add("speechOutput");
	     createspeechOutput.classList.add("fas");
	     createspeechOutput.classList.add("fa-volume-up");
	     createspeechOutput.classList.add("speak");
	 
	    // append all the child to respected place 
	     cretTestPanelItem.appendChild(createcountNumb);
	     cretTestPanelItem.appendChild(creatInput);
	     cretTestPanelItem.appendChild(createspeechOutput);
	     cretTestPanel.appendChild(cretTestPanelItem);
	     testPanelControl.appendChild(cretTestPanel);
	 
	    // getting the number speech value or length for counting the number  
	     inputSpeech = document.getElementsByClassName("inputSpeech");
	 
	     createcountNumb.innerHTML = inputSpeech.length + "."; // putting the value for count
	  
	     dictation.style.height = dictation.scrollHeight + "px"; // increase the size of dictation panel
	
         speechOutput =  document.getElementsByClassName("speechOutput");
		 
 
         for(i = 0; i < numbOfWord ; i++) {
		    speechOutput[i].addEventListener('click', function () {
		     var mesg = testArray;  
	           toSpeak.text = mesg;
		       speechData();
	           tts.speak(toSpeak);	
	          });
		

	
	    
		
		    if (inputSpeech[i].value.toUpperCase() === storeWord[i].toUpperCase()) { 
		       inputSpeech[i].style.backgroundColor = "#d4edda";
		    } 
		
		    else { 
		       inputSpeech[i].style.backgroundColor = "#f8d7da";
		    }
		
		    if (i > 0) {
			   inputSpeech[i-1].disabled = true;
			   speechOutput[i-1].disabled = true;
		    }
		    else {
			   inputSpeech[i].disabled = false;
			   speechOutput[i].disabled = false;
		    }
		 }
		
	}
	else {
	    // alert("input the number first");
		numbWord.focus();
	}	
	
	
 }
 

 
  testFunction = function() {
	var butNext, numbWord;
	
	butNext  = document.getElementById("butNext");
	numbWord = document.getElementById("numbWord");
	
	
	if(numbWord.value > 0) {
	    if(butNext.disabled === true) {
          butNext.disabled = false;	
          creatInputSpeech(); // calling the function for creating InputSpeech		  
	    }
		
		else {
          // nothing to show			
		}
		
	}
	
	else { 
	   numbWord.focus();
	}
}
	
	// this is for testing only 
	
	/* 
    var	numbOfWord = document.getElementById("numbWord").value;
	
	dataAccess = document.getElementsByClassName("btn");
	
	console.log(countInput());
	
	if(countInput() > 1) {
	
	var speechOutput = document.getElementsByClassName("speechOutput");
	
	console.log(speechOutput.innerHTML);
	
	storeWord = []; 
	
	for(i = 0; i < dataAccess.length; i++) {
		storeWord[storeWord.length]= dataAccess[i].innerHTML;
		var x = i;
		speechOutput[i].addEventListener('click', function() {
			
		   var mesg = storeWord[x];
		   
		   x++;
		
	       toSpeak.text = mesg;
		   
		   speechData();
		 
	       tts.speak(toSpeak);
			
		});
	
	}
	
	console.log("working");
	
	}
	
	else {
		console.log("not working");
	}
	 */
	
		
 }
 
 
// working on notes

var notesContent, testButtn;

notesContent = document.getElementById("notes-content");
testButtn = document.getElementById("testButtn");


function notesFunction() {
	var wTest, keywords, finalWords, addElem;
	keywords = ["auto","break","case","char","const","continue","default","do","double","else","enum","extern","float","for","goto","if","int","long","register","return","short","signed","sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while"];
	
     
    for(i=0;i<keywords.length; i++) {
	    
		wTest = notesContent.innerHTML.search(keywords[i]);
	    
		
		if(wTest !== -1) {
			console.log(keywords[i]);
			finalWords = notesContent.innerHTML.substr(wTest, keywords[i].length);
			console.log(finalWords);
			removeWord = notesContent.innerHTML.replace(finalWords, "");
			console.log(removeWord);
			notesContent.innerHTML = removeWord;  // store remove words 
			
			spanElem = document.createElement("span"); // creating spanElements span
	
            addClass = document.createAttribute("class"); //
        	addClass.value = "keywords-test";
	
        	spanElem.setAttributeNode(addClass);
 	
        	spanText = document.createTextNode(finalWords);
        	spanElem.appendChild(spanText);
	        notesContent.appendChild(spanElem);
	
	        seleElem = document.getElementsByClassName("keywords-test")[0];
	        seleElem.style.color = 'red';
			
			useContent = document.getElementById("useContent");
	
			//useContent.innerHTML = notesContent.innerHTML;
			
			console.log(notesContent.innerHTML);
		}
		
		else {
			console.log("false");
		}
	}
	
/* 	wTest = notesContent.innerHTML.search(keywords);
	finalWords = notesContent.innerHTML.substr(wTest, keywords.length);
	removeWord = notesContent.innerHTML.replace("var", "");
	document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, "green");
	
	notesContent.innerHTML = removeWord;
	
	spanElem = document.createElement("span");
	
    addClass = document.createAttribute("class");
	addClass.value = "keywords-test";
	
	spanElem.setAttributeNode(addClass);
	
	spanText = document.createTextNode(finalWords);
	spanElem.appendChild(spanText);
	notesContent.appendChild(spanElem);
	
	seleElem = document.getElementsByClassName("keywords-test")[0];
	seleElem.style.color = 'red';
	
    var x =	wTest.value = "var";
	
	console.log(x);
    
	x.style.color = "yellow";
 */	
}
 


 

 

 
  
 
 
 

  