// button
// const button = document.querySelector( 'button' );
// const distanceBetween = ( p1x, p1y, p2x, p2y ) => {
//   const dx = p1x-p2x;
//   const dy = p1y-p2y;
//   return Math.sqrt( dx*dx + dy*dy );
// };

// document.addEventListener( 'mousemove', event => {
//   const radius = Math.max( button.offsetWidth*0.75, button.offsetHeight*0.75, 100 );

//   const bx = button.parentNode.offsetLeft + button.offsetLeft + button.offsetWidth/2;
//   const by = button.parentNode.offsetTop + button.offsetTop + button.offsetHeight/2;

//   const dist = distanceBetween( event.clientX, event.clientY, bx, by );
//   const angle = Math.atan2( event.clientY - by, event.clientX - bx );

//   const ox = -1 * Math.cos( angle ) * Math.max( ( radius - dist ), 0 );
//   const oy = -1 * Math.sin( angle ) * Math.max( ( radius - dist ), 0 );

//   const rx = oy / 2;
//   const ry = -ox / 2;

//   button.style.transition = `all 0.1s ease`;
//   button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
//   button.style.boxShadow = `0px ${Math.abs(oy)}px ${Math.abs(oy)/radius*40}px rgba(0,0,0,0.15)`;
// } );

// accordion
let listElements = document.querySelectorAll('.link');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        if (listElement.classList.contains('active')){
            listElement.classList.remove('active');
        }else{
            listElements.forEach (listE => {
                listE.classList.remove('active');
            })
            listElement.classList.toggle('active');
        }
    })
});
setTimeout(function () {
    content.style.display = 'none';
}, 10000);

// header
// Open and Close Navbar Menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
   burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
   });

   bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
   });
}
// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
       navbarMenu.classList.remove("is-active");
       bgOverlay.classList.remove("is-active");
    });
 });

// Open and Close Search Bar Toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
   searchToggle.addEventListener("click", () => {
      searchBlock.classList.add("is-active");
   });

   searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
   });
}
// btn
function update_position(e) {
	let _t = e.target;
	
	if(_t.tagName.match(/^button$/i)) {
		let r = _t.getBoundingClientRect();
		['x', 'y'].forEach(c => 
			_t.style.setProperty(`--${c}`, 
													 `${e[`client${c.toUpperCase()}`] - r[c]}px`))
	}
}

addEventListener('mouseover', update_position);
addEventListener('mouseout', update_position)


// sign in
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// intro
function imgSlider(anything) {
document.querySelector('.property').src = anything;
}
function changeBgColor(color) {
  const bg = document.querySelector('.bg');
  bg.style.background = color;
}
let el = document.querySelectorAll('.thumb li');
for(let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    var c = 0;
    while (c < el.length) {
      el[c++].className = 'check';
    }
    el[i].className = 'check active'
  }
}