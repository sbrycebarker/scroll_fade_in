window.onscroll = function() {
  scrollFunction()
};



let reef = document.getElementById('reef');
let ele = document.getElementById('elephants');
let deer = document.getElementById('deer');
ele.style.opacity = '0';
deer.style.opacity = '0';
marmots.style.opacity = '0';

// scrollFunction()
function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 1000;
  console.log("scroll at", scrolled)

  // Bring HTML Elements into JavaScript

  function scrollPoint(scroll) {
    if (scroll < 260) {
      console.log('reef');
      ele.style.opacity = '0';
      deer.style.opacity = '0';
      marmots.style.opacity = '0';
      reef.style.opacity = '1';
    } if (scroll > 260 && scroll < 510) {
      console.log('deer');
      reef.style.opacity = '0';
      ele.style.opacity = '0';
      marmots.style.opacity = '0'
      deer.style.opacity = '1';
    } if (scroll > 510 && scroll < 950){
      console.log('ele');
      reef.style.opacity = '0';
      deer.style.opacity = '0'
      marmots.style.opacity= '0';
      ele.style.opacity = '1';
    } if (scroll > 950) {
      console.log('marmots');
      reef.style.opacity = '0';
      deer.style.opacity = '0';
      ele.style.opacity = '0';
      marmots.style.opacity = '1'
    }

  }

  scrollPoint(scrolled)

}


// scrollPoint(scrolled)
