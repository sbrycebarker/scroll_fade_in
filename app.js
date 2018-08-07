window.onscroll = function() {
  scrollFunction()
};



let reef = document.getElementById('reef');
let ele = document.getElementById('elephants');
let deer = document.getElementById('deer');
ele.style.opacity = '0';
deer.style.opacity = '0';

// scrollFunction()
function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  // document.getElementById("myBar").style.width = scrolled + "%";
  console.log("scroll at", scrolled)

  // Bring HTML Elements into JavaScript

  function scrollPoint(scroll) {
    if (scroll < 45) {
      console.log('reef');
      ele.style.opacity = '0';
      deer.style.opacity = '0';
      reef.style.opacity = '1';
    } if (scroll > 45 && scroll < 95) {
      reef.style.opacity = '0';
      ele.style.opacity = '0';
      deer.style.opacity = '1';
    } if (scroll > 95) {
      reef.style.opacity = '0';
      deer.style.opacity = '0';
      ele.style.opacity = '1';
    }

  }

  scrollPoint(scrolled)

}

function scrollPoint() {
  if (scroll < 45) {
    let one = document.getElementsByClassName('on-1')
    one.style.display = 'none'
  }
}

// scrollPoint(scrolled)
