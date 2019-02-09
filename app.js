// JavaScript to trigger scroll tracking function on scroll

window.onscroll = function() {
  scrollFunction()
};

  // Brings HTML Elements into JavaScript

let reef = document.getElementById('reef');
let ele = document.getElementById('elephants');
let deer = document.getElementById('deer');
let bear = document.getElementById('bear');

//  Set elements to clear opacity as default
ele.style.opacity = '0';
deer.style.opacity = '0';
bear.style.opacity = '0';

//  This is our scroll tracking function

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 1000;
  console.log("scroll at", scrolled)

//  This is the function that triggers elements to fade at desired scrolling points

  function scrollPoint(scroll) {
    reef.style.opacity = '0';
    deer.style.opacity = '0';
    ele.style.opacity = '0';
    bear.style.opacity = '0';
    deer.pause();
    reef.pause();
    ele.pause();
    bear.pause();
    if (scroll < 260) {
      console.log('reef');
      reef.play();
      reef.style.opacity = '1';
    } if (scroll > 260 && scroll < 510) {
      console.log('deer');
      deer.play();
      deer.style.opacity = '1';
    } if (scroll > 510 && scroll < 950){
      console.log('ele');
      ele.play();
      ele.style.opacity = '1';
    } if (scroll > 950) {
      console.log('marmots');
      bear.play();
      bear.style.opacity = '1';
    }

  }

  // scrollPoint(scrolled)

}
