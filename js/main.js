particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {});

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
load('./partials/sop.html', document.querySelector('#sop-page'));

var initialIndex = 0
var initialNextName = 'Taurus'
var initialPrevName = 'Pisces'
if(window.location.href.split('#').length > 1) {
  initialIndex = parseInt(window.location.href.split('#')[1])
}
 
if (initialIndex == 1) {
  initialNextName = 'Gemini';
  initialPrevName = 'Aries';
} else if (initialIndex == 2) {
  initialNextName = 'Cancer';
  initialPrevName = 'Taurus';
}

//ARIES ANIMATION
var aries = lottie.loadAnimation({
  container: document.getElementById('circle-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/aries.json' 
});

// CANCER ANIMATION
var cancer = lottie.loadAnimation({
  container: document.getElementById('cancer-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/cancer.json' 
});

// LIBRA ANIMATION DIS ONE
var libra = lottie.loadAnimation({
  container: document.getElementById('libra-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/libra-animation.json' 
});

// PISCES ANIMATION
var pisces = lottie.loadAnimation({
  container: document.getElementById('pisces-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/pisces-animation.json' 
});

// SAG ANIMATION
var sag = lottie.loadAnimation({
  container: document.getElementById('sag-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/sag.json' 
});

// AQUA ANIMATION
var aqua = lottie.loadAnimation({
  container: document.getElementById('aqua-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/aqua.json' 
});

// VIRGO ANIMATION
var virgo = lottie.loadAnimation({
  container: document.getElementById('virgo-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/virgo.json' 
});

// LEO ANIMATION
var leo = lottie.loadAnimation({
  container: document.getElementById('leo-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/leo.json' 
});

// GEMINI ANIMATION
var gemini = lottie.loadAnimation({
  container: document.getElementById('gemini-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/gemini.json' 
});

// TAURUS ANIMATION
var taurus = lottie.loadAnimation({
  container: document.getElementById('taurus-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/taurus.json' 
});

// CAP ANIMATION
var cap = lottie.loadAnimation({
  container: document.getElementById('cap-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/capricorn.json' 
});

//SOP ANIMATION
var sop = lottie.loadAnimation({
  container: document.getElementById('sop-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/sop.json' 
});

$('.main-container').on('afterChange', function(event, slick, currentSlide){
    var nextArrow = document.querySelector('#nextName');
    var prevArrow = document.querySelector('#prevName');
    if (currentSlide == 0) {
      aries.play();
      prevArrow.innerHTML = 'Pisces';
    }  else if (currentSlide == 1) {
      taurus.play();
      nextArrow.innerHTML = 'Gemini';
      prevArrow.innerHTML = 'Aries';
    } else if (currentSlide == 2) {
      gemini.play();
      nextArrow.innerHTML = 'Cancer';
      prevArrow.innerHTML = 'Taurus';
    } else if (currentSlide == 3) {
      cancer.play();
      nextArrow.innerHTML = 'Leo';
      prevArrow.innerHTML = 'Gemini';
    } else if (currentSlide == 4) {
      leo.play();
      nextArrow.innerHTML = 'Virgo';
      prevArrow.innerHTML = 'Cancer';
    } else if (currentSlide == 5) {
      virgo.play();
      nextArrow.innerHTML = 'Libra';
      prevArrow.innerHTML = 'Leo';
    } else if (currentSlide == 6) {
      libra.play();
      nextArrow.innerHTML = 'Scorpio';
      prevArrow.innerHTML = 'Virgo';
    } else if (currentSlide == 7) {
      sop.play();
      nextArrow.innerHTML = 'Sagittarius';
      prevArrow.innerHTML = 'Libra';
    } else if (currentSlide == 8) {
      sag.play();
      nextArrow.innerHTML = 'Capricorn';
      prevArrow.innerHTML = 'Scorpio';
    } else if (currentSlide == 9) {
      cap.play();
      nextArrow.innerHTML = 'Aquarius';
      prevArrow.innerHTML = 'Sagittarius';
    } else if (currentSlide == 10) {
      aqua.play();
      nextArrow.innerHTML = 'Pisces';
      prevArrow.innerHTML = 'Capricorn';
    } else if (currentSlide == 11) {
      pisces.play();
      nextArrow.innerHTML = 'Aries';
      prevArrow.innerHTML = 'Aquarius';
    } 

 })

$('.main-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
   var animations = document.querySelectorAll('.animated');
    animations.forEach(function(animation) {
      animation.classList.remove('animated', 'fadeIn');
      setTimeout(function() {
        animation.classList.add('animated', 'fadeIn');
      }, 10);
    });
    if (currentSlide == 0) {
      aries.stop();
    } else if (currentSlide == 1) {
      taurus.stop();
    } else if (currentSlide == 2) {
      gemini.stop();
    } else if (currentSlide == 3) {
      cancer.stop();
    } else if (currentSlide == 4) {
      leo.stop();
    } else if (currentSlide == 5) {
      virgo.stop();
    } else if (currentSlide == 6) {
      libra.stop();
    } else if (currentSlide == 7) {
      sop.stop();
    } else if (currentSlide == 8) {
      sag.stop();
    } else if (currentSlide == 9) {
      cap.stop();
    } else if (currentSlide == 10) {
      aqua.stop();
    } else if (currentSlide == 11) {
      pisces.stop();
    }
})

$('.main-container').on('init', function(event, slick){
    var currentSlide =  initialIndex
    if (currentSlide == 0) {
      aries.play();
    }  else if (currentSlide == 1) {
      taurus.play();
    } else if (currentSlide == 2) {
      gemini.play();
    } else if (currentSlide == 3) {
      cancer.play();
    } else if (currentSlide == 4) {
      leo.play();
    } else if (currentSlide == 5) {
      virgo.play();
    } else if (currentSlide == 6) {
      libra.play();
    } else if (currentSlide == 7) {
      sop.play();
    } else if (currentSlide == 8) {
      sag.play();
    } else if (currentSlide == 9) {
      cap.play();
    } else if (currentSlide == 10) {
      aqua.play();
    } else if (currentSlide == 11) {
      pisces.play();
    } 
 })

$('.main-container').slick({
  nextArrow: '<div id="next"><i class="fas fa-arrow-right a-right control-c next slick-next"></i><span id="nextName">' + initialNextName + '</span></div>',
  prevArrow: '<div id="prev"><i class="fas fa-arrow-left a-left control-c prev slick-prev"></i><span id="prevName">' + initialPrevName + '</span></div>',
  initialSlide: initialIndex
});



        
