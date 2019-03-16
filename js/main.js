particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

function load(url, element)
{
    if (!url || !element) {
        return;
    }

    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText; 
}

load('./partials/aries.html', document.querySelector('#aries-page'));
load('./partials/cancer.html', document.querySelector('#cancer-page'));
load('./partials/libra.html', document.querySelector('#libra-page'));
load('./partials/pisces.html', document.querySelector('#pisces-page'));
load('./partials/sag.html', document.querySelector('#sag-page'));
load('./partials/aqua.html', document.querySelector('#aqua-page'));
load('./partials/virgo.html', document.querySelector('#virgo-page'));
load('./partials/leo.html', document.querySelector('#leo-page'));
load('./partials/gemini.html', document.querySelector('#gemini-page'));
load('./partials/taurus.html', document.querySelector('#taurus-page'));
load('./partials/cap.html', document.querySelector('#cap-page'));
load('./partials/scorp.html', document.querySelector('#scorp-page'));

var initialIndex = 0
var initialNextName = 'cancer'
if(window.location.href.split('#').length > 1) {
  initialIndex = window.location.href.split('#')[1]
}
 
if (initialIndex == 1) {
  initialNextName = 'Libra'
} else if (initialIndex == 2) {
  initialNextName == 'whatever'
}


//ARIES ANIMATION
var aries = lottie.loadAnimation({
  container: document.getElementById('circle-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/aries-season.json' // the path to the animation json
});

// CANCER ANIMATION
var cancer = lottie.loadAnimation({
  container: document.getElementById('cancer-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/cancer.json' // the path to the animation json
});

// LIBRA ANIMATION DIS ONE
var libra = lottie.loadAnimation({
  container: document.getElementById('libra-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/libra-animation.json' // the path to the animation json
});

// PISCES ANIMATION
var pisces = lottie.loadAnimation({
  container: document.getElementById('pisces-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/pisces-animation.json' // the path to the animation json
});

// SAG ANIMATION
var sag = lottie.loadAnimation({
  container: document.getElementById('sag-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/sag.json' // the path to the animation json
});

// AQUA ANIMATION
var aqua = lottie.loadAnimation({
  container: document.getElementById('aqua-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/aqua.json' // the path to the animation json
});

// VIRGO ANIMATION
var virgo = lottie.loadAnimation({
  container: document.getElementById('virgo-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/virgo.json' // the path to the animation json
});

// LEO ANIMATION
var leo = lottie.loadAnimation({
  container: document.getElementById('leo-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/leo.json' // the path to the animation json
});

// GEMINI ANIMATION
var gemini = lottie.loadAnimation({
  container: document.getElementById('gemini-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/gemini.json' // the path to the animation json
});

// TAURUS ANIMATION
var taurus = lottie.loadAnimation({
  container: document.getElementById('taurus-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/taurus.json' // the path to the animation json
});

// CAP ANIMATION
var cap = lottie.loadAnimation({
  container: document.getElementById('cap-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/capricorn.json' // the path to the animation json
});

// SCORP ANIMATION
var scorp = lottie.loadAnimation({
  container: document.getElementById('scorp-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/scorp.json' // the path to the animation json
});


$('.main-container').on('afterChange', function(event, slick, currentSlide){
    // wow = new WOW().init();
    // wow.start();
    var nextArrow = document.querySelector('#nextName');
    if (currentSlide == 0) {
      // ARIES ANIMATION
      aries.play();
    }  else if (currentSlide == 1) {
      //CANCER ANIMATION
      cancer.play();
      nextArrow.innerHTML = 'libra';
    } else if (currentSlide == 2) {
      // LIBRA ANIMATION
      libra.play();
    } else if (currentSlide == 3) {
      //PISCES ANIMATION
      pisces.play();
    } else if (currentSlide == 4) {
      //SAG ANIMATION
      sag.play();
    } else if (currentSlide == 5) {
      //AQUA ANIMATION
      aqua.play();
    } else if (currentSlide == 6) {
      // VIRGO ANIMATION
      virgo.play();
    } else if (currentSlide == 7) {
      //LEO ANIMATION
      leo.play();
    } else if (currentSlide == 8) {
      // GEMINI ANIMATION
      gemini.play();
    } else if (currentSlide == 9) {
      // TAURUS ANIMATION
      taurus.play();
    } else if (currentSlide = 10) {
      // CAP ANIMAITON
      cap.play();
    } else if (currentSlide = 11) {
      //SCORP ANIMATION
      scorp.play();
    }

 })

$('.main-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // wow.stop();
    // wow.resetAnimation();
    if (currentSlide == 0) {
      // ARIES ANIMATION
      aries.stop();
    } else if (currentSlide == 1) {
      //CANCER ANIMATION
      cancer.stop();
    } else if (currentSlide == 2) {
      // LIBRA ANIMATION
      libra.stop();
    } else if (currentSlide == 3) {
      // LIBRA ANIMATION
      pisces.stop();
    } else if (currentSlide == 4) {
      // SAG ANIMATION
      sag.stop();
    } else if (currentSlide == 5) {
      // AQUA ANIMATION
      aqua.stop();
    } else if (currentSlide == 6) {
      // VIRGO ANIMATION
      virgo.stop();
    } else if (currentSlide == 7) {
      //LEO ANIMATION
      leo.stop();
    } else if (currentSlide == 8) {
      // GEMINI ANIMATION
      gemini.stop();
    } else if (currentSlide == 9) {
      // TAURUS ANIMATION
      taurus.stop();
    } else if (currentSlide == 10) {
      // CAP ANIMATION
      cap.stop();
    } else if (currentSlide == 11) {
      //SCORP ANIMATION
      scorp.stop();
    }
})

// capricorn.json

$('.main-container').on('init', function(event, slick){
    // wow = new WOW().init();
    // wow.start();
    var currentSlide =  initialIndex
    if (currentSlide == 0) {
      // ARIES ANIMATION
      aries.play();
    }  else if (currentSlide == 1) {
      //CANCER ANIMATION
      cancer.play();
    } else if (currentSlide == 2) {
      // LIBRA ANIMATION
      libra.play();
    } else if (currentSlide == 3) {
      //PISCES ANIMATION
      pisces.play();
    } else if (currentSlide == 4) {
      //SAG ANIMATION
      sag.play();
    } else if (currentSlide == 5) {
      //AQUA ANIMATION
      aqua.play();
    } else if (currentSlide == 6) {
      // VIRGO ANIMATION
      virgo.play();
    } else if (currentSlide == 7) {
      //LEO ANIMATION
      leo.play();
    } else if (currentSlide == 8) {
      // GEMINI ANIMATION
      gemini.play();
    } else if (currentSlide == 9) {
      // TAURUS ANIMATION
      taurus.play();
    } else if (currentSlide = 10) {
      // CAP ANIMAITON
      cap.play();
    } else if (currentSlide = 11) {
      //SCORP ANIMATION
      scorp.play();
    }
 })

$('.main-container').slick({
   // dots: true
  nextArrow: '<div id="next"><i class="fas fa-arrow-right a-right control-c next slick-next"></i><br><span id="nextName">' + initialNextName + '</span></div>',
  prevArrow: '<i class="fas fa-arrow-left a-left control-c prev slick-prev"></i>',
  initialSlide: initialIndex
});



        
