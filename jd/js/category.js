window.addEventListener('load',function(){
    categoryList();
    categoryContent();
    categoryListCeiling();
});

function categoryList(){
    var mySwiper = new Swiper ('.category_list .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        slidesPerView : 'auto',
        freeMode : true,
      })        
}

function categoryListCeiling(){
    var lists = document.querySelectorAll('li');
    var swiperContainer = document.querySelector('.swiper-container');
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    var swiperSlide = document.querySelector('.swiper-slide');
    for (let i = 0; i < lists.length; i++) {
        lists[i].addEventListener('click',function(){
              var index = this.dataset.index;
              var distanceY = -index * this.offsetHeight;
              var minDistanceY = swiperContainer.offsetHeight - swiperSlide.offsetHeight;
              if(distanceY < minDistanceY){
                  distanceY = minDistanceY;
              }
              swiperWrapper.style.transform = "translate3d(0px,"+ distanceY +"px,0px)";
              swiperWrapper.style.transition = "all .5s";
              for (let i = 0; i < lists.length; i++) {
                  lists[i].classList.remove('active');
                  
              }
              this.classList.add('active');
        });
    }
}

function categoryContent(){
    var mySwiper = new Swiper ('.category_content .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        slidesPerView : 'auto',
        freeMode : true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
      })        
}

