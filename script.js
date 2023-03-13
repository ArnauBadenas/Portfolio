window.onload = function() {
    Particles.init({
      selector: '.background',
      //color: 'red',
      connectParticles: true,
      maxParticles:200,
      responsive: [{
        breakpoint: 800,
        options: {
          maxParticles: 50,
          connectParticles: true
        }
      }]
    });
  };
  //https://github.com/marcbruederlin/particles.js