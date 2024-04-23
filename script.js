//Page turning Effect
$(function() {
    var $mybook 		= $('#mybook');
    var $bttn_next		= $('');
    var $bttn_prev		= $('');
    var $loading		= $('#loading');
    var $mybook_images	= $mybook.find('img');
    var cnt_images		= $mybook_images.length;
    var loaded			= 0;
     
    $mybook_images.each(function(){
        var $img 	= $(this);
        var source	= $img.attr('src');
        $('<img/>').load(function(){
            ++loaded;
            if(loaded == cnt_images){
                $loading.hide();
                $mybook.show().booklet({
                    name:               null,                           
                    width:              1400,                            
                    height:             800,                             
                    speed:              600,                            
                    direction:          'LTR',                           
                    next:               $bttn_next,          			  
                    prev:               $bttn_prev,
                });
                Cufon.refresh();
            }
        }).attr('src',source);
    });
});


//FullScreen
function enterFullScreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    Swal.fire({
        title: 'Your Junior Requests!!!',
        html: '<div>Enter FullScreen and Enjoy the Immersive Experience</div>',
        showCancelButton: false,
        confirmButtonText: 'Enter Fullscreen',
        allowOutsideClick: false, 
        allowEscapeKey: false
    }).then((result) => {
        if (result.isConfirmed) {
            enterFullScreen();
        }
    });
});


//Emoji Rain
const emojis = ["😇", "😊", "😂", "😍", "😜", "🥰","❤️","💙","💔"]; 
const rainContainer = document.querySelector('#page1');
const rainContainer1 = document.querySelector('#page2');

function createEmoji(container) {
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.classList.add('emoji');
    emoji.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    emoji.style.animationDuration = `${Math.random() * 6 + 13}s`; // Random falling speed
    container.appendChild(emoji);

    emoji.addEventListener('click', () => {
        emoji.style.animation = 'popKeyframes 0.5s ease forwards';
        setTimeout(() => {
            emoji.remove(); // Remove the emoji after pop animation
        }, 1500); // Adjust timing to match pop animation duration
    });
}

setInterval(() => {
    createEmoji(rainContainer);
    createEmoji(rainContainer1);
}, 500); // Add new emojis every 0.5 seconds

//Audio
const audio = document.getElementById('myAudio');

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
    // Check the key code
    switch(event.key) {
        case 'm':
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
            break;
        
        default:
            break;
    }
});

//video

var isPlaying = false;

document.addEventListener('keydown', function(event) {
    // Check if the key pressed is 'K' (case insensitive)
    if (event.key.toUpperCase() === 'P') {
        var video = document.getElementById('fenix');

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }

        // Update the playback state
        isPlaying = !isPlaying;
    }
});


//video
const video = document.getElementById('myVideo');

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
    // Check the key code
    switch(event.key) {
        case 'k': // Play/pause video when 'K' is pressed
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            break;
        case 'f':
            if (!document.fullscreenElement) {
                video.requestFullscreen();
            } 
        case 'e':
            document.exitFullscreen();
            break;
        
        default:
            break;
    }
});

