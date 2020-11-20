
let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');

window.addEventListener('mousemove', cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
  link.addEventListener('mouseleave', () =>{
    mouseCursor.classList.remove("link-grow");
    link.classList.remove('hovered-link');
  });
  link.addEventListener('mouseover', () =>{
    mouseCursor.classList.add("link-grow");
  });

});

// gsap
function init() {

  //load animation
  window.onload = function () {
    const master = gsap.timeline();
    master
      .add(animateHome);
  }
}

function animateHome() {
  const tl = gsap.timeline();

  tl.fromTo('.circle .fas', {
    opacity: 0
  }, {
    duration: 'random(5, 6)',
    opacity: 'random(0, 0.5)',
    scale: 0,
    opacity: 1,
    rotate: 'random(40deg, -80deg)',
    y: '-=50',
    x: 'random(100, -50)',
    ease: 'back',
    stagger: {
      amount: 3,
      from: 'center',
      grid: 'auto',
      repeat: 20,
    }
  });

  return tl;
};


init();
