
// pick a random background on page load
switch (Math.floor(Math.random() * 8)) {
    default:
    case 0:
    document.body.style.backgroundImage = "url(01_drumkit/backgrounds/ryustage.png)";
        break;
    case 1:
    document.body.style.backgroundImage = "url(01_drumkit/backgrounds/akumastage.png)";
        break;
    case 2:
    document.body.style.backgroundImage = "url(01_drumkit/backgrounds/elenastage.png)";
        break;
    case 3:
    document.body.style.backgroundImage = "url(01_drumkit/backgrounds/kenstage.png)";
        break;
    case 4:
    document.body.style.backgroundImage = "url(01_drumkit/backgrounds/makotostage.png)";
        break;
    case 5:
    document.body.style.backgroundImage = "url(01_drumkit/backgrounds/urienstage.png)";
        break;
    case 6:
    document.body.style.backgroundImage = "url(01_drumkit/backgrounds/yunstage.png)";
        break;
    case 7:
    document.body.style.backgroundImage = "url(01_drumkit/backgrounds/yangstage.png)";
        break;
}



function playSoundAnim(e)
{
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // gets each key element
 const sprite = document.getElementById('ryu');

// depending on the keycode pressed change the gif
switch(e.keyCode)
  {
    case 65: sprite.src = "01_drumkit/sprites/ryu-uhh.gif";
    break;
    case 83: sprite.src = "01_drumkit/sprites/ryu-tatsu.gif";
    break;
    case 68: sprite.src = "01_drumkit/sprites/ryu-shoryuken.gif";
    break;
    case 70: sprite.src = "01_drumkit/sprites/ryu-hadoken.gif";
    break;
    case 71: sprite.src = "01_drumkit/sprites/ryu-punch.gif";
    break;
    case 72: sprite.src = "01_drumkit/sprites/ryu-kick.gif";
    break;
    default: sprite.src = "01_drumkit/sprites/ryu-stance.gif";
  }


 if (!audio) return;
 audio.currentTime=0;
 audio.play();

 key.classList.add('playing'); // adds the "playing" class to the key div so the css for "playing" will kick in

}


const keys = document.querySelectorAll('.key');   // select all key divs on the page comes back as a node list
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // calls the removeTransition 

function removeTransition(e)
{
  if (e.propertyName !== 'transform') return; 
  this.classList.remove('playing'); // remove the "playing" class from the key div
}

window.addEventListener('keydown', playSoundAnim); // Event listener that calls the playSoundAnim function when a keydown happens