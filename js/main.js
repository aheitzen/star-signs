particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

lottie.loadAnimation({
  container: document.getElementById('circle-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/aries-season.json' // the path to the animation json
});

new WOW().init();
        