const { functionsIn } = require("lodash");

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const totopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    
  if(window.scrollY > 500){
    // gsap.to(요소,지속시간-단위 s,옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'});
    //to-top 보이기
    gsap.to(totopEl, .5, {
      x: 0
    });
  }else{
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //to-top 숨기기
    gsap.to(totopEl, .5, {
      x: 100
    });
  }
}), 300);
//_.throttle(함수, ms시간); ==> 과부하 제동을 걸어주는 장치!! 특히 스크롤 시


totopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach (function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index+1) * 0.5, // 순차적으로 이미지 나타내는 방법
    opacity : 1
  });
});


//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true, //자동 재생
  loop : true //전체 반복
});

new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, // 한번에 보여줄 슬라이드 갯수
  spaceBetween : 10, // 슬라이드 간격
  centeredSlides : true, //1번 슬라이드가 가운데 보이기
  loop : true,
  //autoplay : true,
  //delay : 5000
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let ishide = false;
promotionToggleBtn.addEventListener('click', function(){
  ishide = !ishide;
  if(ishide){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});

//범위 랜덤 함수(소수점 2자리까지)
function random(min,max){
  //'.toFixed()'를 통해 반환된 문자 데이터를, 'parseFloat()'을 통해 소수점을 가지는 숫자 데이터로 반환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat : -1, // -1은 무제한 반복을 의미!!
    yoyo : true, // 어떠한 행위를 반대로 실행 => 1->2->3 yoyo 3->2->1
    ease : Power1.easeInOut, // greensock 홈페이지의 easing 함수 활용하여 확인
    delay : random(0, delay)
    }
  );
};
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 15);




const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소들
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()