window.addEventListener('load',function(){
    searchGradient();
    downTime();
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },  
    });
});
function searchGradient(){
     var header = document.querySelector('#header');
    var heig = document.querySelector('#lunbotu');
    scroll();
    function scroll(){
        var top = document.documentElement.scrollTop;
        var gao = heig.offsetHeight;
        var opacity = top / gao ;
        header.style.backgroundColor = "rgba(204,51,42,"+opacity+")";
    }
     document.addEventListener('scroll',function(){
        scroll();
     });
             
}
function downTime(){
   var spanList = document.querySelectorAll('.downtime span');
   var time = 7200;
   times();
   function times(){
       var h = Math.floor( time / 60 / 60 );
       var m = Math.floor( time / 60 % 60 );
       var s = time % 60 ;
       spanList[0].innerHTML = Math.floor( h / 10 );
       spanList[1].innerHTML = h % 10 ;
       spanList[3].innerHTML = Math.floor( m / 10 );
       spanList[4].innerHTML = m % 10 ;
       spanList[6].innerHTML = Math.floor( s / 10 );
       spanList[7].innerHTML = s % 10 ;
   }
   setInterval(function(){
       time--;
       times(); 
   },1000);
}