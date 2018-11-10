window.onscroll = function() {
  scrollFunction()
};

  // Bring HTML Elements into JavaScript

let reef = document.getElementById('reef');
let ele = document.getElementById('elephants');
let deer = document.getElementById('deer');
let bear = document.getElementById('bear');
ele.style.opacity = '0';
deer.style.opacity = '0';
bear.style.opacity = '0';

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 1000;
  console.log("scroll at", scrolled)


  function scrollPoint(scroll) {
    if (scroll < 260) {
      console.log('reef');
      reef.play();
      ele.style.opacity = '0';
      deer.style.opacity = '0';
      bear.style.opacity = '0';
      reef.style.opacity = '1';
    } if (scroll > 260 && scroll < 510) {
      console.log('deer');
      deer.play();
      reef.pause();
      ele.pause();
      bear.pause();
      reef.style.opacity = '0';
      ele.style.opacity = '0';
      bear.style.opacity = '0'
      deer.style.opacity = '1';
    } if (scroll > 510 && scroll < 950){
      console.log('ele');
      ele.play();
      deer.pause();
      reef.pause();
      reef.style.opacity = '0';
      deer.style.opacity = '0'
      bear.style.opacity= '0';
      ele.style.opacity = '1';
    } if (scroll > 950) {
      console.log('marmots');
      bear.play();
      reef.style.opacity = '0';
      deer.style.opacity = '0';
      ele.style.opacity = '0';
      bear.style.opacity = '1';
    }

  }

  scrollPoint(scrolled)

}
