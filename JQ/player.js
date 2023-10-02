var LoopVideo=true;
document.addEventListener("DOMContentLoaded", setupControl, false);
      function setupControl() {
          // select the video element from page
          var Item_Propaganda = document.getElementById("Item_Propaganda");
          if (Item_Propaganda.canPlayType) {
             // remove the default buttons
             Item_Propaganda.removeAttribute("controls");
             // display the custom buttons and the progress bar
             document.getElementById("controls").style.display="block";
             document.getElementById("progressbar").style.display="block";
             // add event-handlers to control the video element
             Item_Propaganda.addEventListener("timeupdate", reportProgress, false);
             Item_Propaganda.addEventListener("ended", endPlayback, false);
             // enable and disable the controls buttons to reflect the player state
             Item_Propaganda.addEventListener("play",function() {
                 document.getElementById("start").disabled=true;
		 document.getElementById("startBig").disabled=true;
                 document.getElementById("pause").disabled=false;
                 document.getElementById("stop").disabled=false;
                 document.getElementById("plus").disabled=false;
                 document.getElementById("minus").disabled = false;
                 document.getElementById("mute").disabled=false;
              }, false);
             Item_Propaganda.addEventListener("pause", function() {
                 document.getElementById("start").disabled=false;
		 document.getElementById("startBig").disabled=false;
                 document.getElementById("pause").disabled=true;
                 document.getElementById("plus").disabled=true;
                 document.getElementById("minus").disabled = true;
                 document.getElementById("mute").disabled=true;
                }, false);
           // add event-handlers for the control buttons
             document.getElementById("start").addEventListener("click",startPlayback,false);
	     document.getElementById("startBig").addEventListener("click",startPlayback,false);
             document.getElementById("stop").addEventListener("click",stopPlayback,false);
             document.getElementById("pause").addEventListener("click",pausePlayback,false);
             document.getElementById("plus").addEventListener("click",volumeUp, false);
             document.getElementById("minus").addEventListener("click", volumeDown, false);
             document.getElementById("mute").addEventListener("click", toggleMute, false);
             document.getElementById("loop").addEventListener("click", loopVideo, false);
         }
    }
   
  //define the event-handlers
        
	function loopVideo(){
		if(LoopVideo == true)
		{
			LoopVideo = false;
			document.getElementById("loop").innerHTML = '<img src="Images/Controls/loop.png" alt="Mute button" width="32px" height="32px"/>';
		}
		else
		{
			LoopVideo = true;
			document.getElementById("loop").innerHTML = '<img src="Images/Controls/unloop.png" alt="Mute button" width="32px" height="32px"/>';
		}
	}

       // if play button is pushed, the media starts playing and the color of the page
       //background is changed
       function startPlayback() {
          document.getElementsByTagName("body")[0].style.backgroundColor="#664c58";
          document.getElementById("Item_Propaganda").play();
	  $('#start').addClass('HideClass');
	  $('#startBig').addClass('HideClass');
	  $('#stop').removeClass('HideClass');
	  $('#pause').removeClass('HideClass');
       }
       // if pause button is pushed, the media play is paused
       function pausePlayback() {
          document.getElementById("Item_Propaganda").pause();
	  $('#start').removeClass('HideClass');
	  $('#startBig').removeClass('HideClass');
	  $('#stop').removeClass('HideClass');
	  $('#pause').addClass('HideClass');
       }
       //if stop button is pushed, the media play stops and the current play time is reset to 0
       function stopPlayback() {
          var Item_Propaganda = document.getElementById("Item_Propaganda");
          Item_Propaganda.pause();
          Item_Propaganda.currentTime=0;
	  LoopVideo = false;
          endPlayback();
       } 
  //if the plus button is pushed, the sound volume is increased by 10%
  function volumeUp() {
      //get the current volume
     var Item_Propaganda = document.getElementById("Item_Propaganda");
     var volume = Math.floor(Item_Propaganda.volume * 10)/10;
     Item_Propaganda.muted = false;
     if(volume >= 0.9) Item_Propaganda.volume = 1;
     else Item_Propaganda.volume += 0.1;
  } 
  //if the minus button is pushed, the sound volume is decreased by 10%
  function volumeDown() {
    //get the current volume
    var Item_Propaganda = document.getElementById("Item_Propaganda");
    var volume = Math.floor(Item_Propaganda.volume * 10)/10;
    Item_Propaganda.muted = false;
    if(volume <= 0.1) Item_Propaganda.volume = 0;
    else Item_Propaganda.volume -= 0.1;
  }m
   
 //if the mute button is pushed, the player wilwill toggle between Mute and Unmute state
  function toggleMute() {
    var Item_Propaganda = document.getElementById("Item_Propaganda");
    var mute = document.getElementById("mute");
    if(Item_Propaganda.muted) {
    mute.innerHTML = '<img src="Images/Controls/mute-icon.png" alt="Mute button" width="32px" height="32px"/>';
    Item_Propaganda.muted = false;
   } else {
    mute.innerHTML= '<img src="Images/Controls/unmute.png" alt="UnMute button" width="32px" height="32px"/>';
    Item_Propaganda.muted = true;
   }
  }
   // when the media play is finished or stopped
   function endPlayback() {
          // reset the color of page background
          document.getElementsByTagName("body")[0].style.backgroundColor="#fff";
        // reset the progress bar
          var progress = document.getElementById("butterfly");
          progress.style.left="-10px";
          // reset the state of buttons
          document.getElementById("start").disabled=false;
          document.getElementById("pause").disabled=true;
          document.getElementById("stop").disabled=true;
		//alert('status : ' + status);
	  $('#start').removeClass('HideClass');
	  $('#startBig').removeClass('HideClass');
	  $('#stop').addClass('HideClass');
	  $('#pause').addClass('HideClass');
	  if(LoopVideo == true)
	  {
		startPlayback();
	  }
	  else
	  {
		if(status == 0)
		{
			$('#Top').animate({top: '+=160'}, 1000, function() {
				// Animation complete.
			});
			$('#Bttm').animate({bottom: '+=120'}, 1000, function() {
				// Animation complete.
			});
			$('#Lft_Mdll').animate({left: '+=120'}, 1000, function() {
				// Animation complete.
			});
			//$("#Top").slideDown();
			//$("#Bttm").slideDown();
			//$("#Lft_Mdll").animate({width: 'show'});
			//$('body').css('cursor', 'default');
			status = 1;
		}
	  }
       }
     // update the progress bar
    function reportProgress() {
          var barwidth = 500;
          var sliderwidth = 30;
          // get current time
          var time = Math.round(this.currentTime);
          //get the media play time
          var duration = parseInt(this.duration);
          //calculate the position on the progress bar
          var position = barwidth * (time / duration);
          if (isNaN(position)) return;
          //update the progress bar
          document.getElementById("loadingprogress").style.width=position + "px";
          // update the position of the butterfly
          var butterfly = document.getElementById("butterfly");
          if (position <= (barwidth - Math.round(sliderwidth / 2))) {
             butterfly.style.left=position + "px";
          } else {
             butterfly.style.left=barwidth - Math.round(sliderwidth / 2);
          }
       }
