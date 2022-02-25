let imgVideo = document.getElementById('imgVideo');
let videoOne = document.getElementById('videoOne');



imgVideo.onclick = function () {
  videoOne.style.display = 'block';
  imgVideo.style.zIndex = '1';
  videoOne.controls = true;
  videoOne.play();
  videoOne.style.zIndex = '3';
  
}

videoOne.onclick = function () {
  imgVideo.style.zIndex = '3';
  videoOne.play();
  videoOne.style.zIndex = '1'
}


let componentsVideo = document.getElementById('componentsVideo');
let componentsImg = document.getElementById('componentsImg');

componentsImg.onclick = function () {
  componentsImg.style.display = 'none';
  componentsVideo.style.display = 'block';
  componentsImg.style.zIndex = '1';
  componentsVideo.style.zIndex = '3';
  componentsVideo.controls = true;
  componentsVideo.play();
}

componentsVideo.onclick = function () {
  componentsVideo.style.display = 'none';
  componentsImg.style.display = 'block';
  componentsImg.style.zIndex = '3';
  componentsVideo.style.zIndex = '1';
  componentsVideo.controls = true;
  componentsVideo.pause();
}










$('video').click(function(){
  var videos = $('video');
  $.each(videos, function(){
      this.pause();
      this.controls = false;
  });

  if(this.pause){
      this.play();
  } else{
      this.play();
  }

  this.controls = true;
})
////////////////////////// I have to revise this function





let link = document.getElementById('link');
let code = document.getElementById('code');
  link.onclick = function () {

    if(code.style.display == 'block'){
      code.style.display = 'none'
    } else {
      code.style.display = 'block'
    }
  }


  let cardNumber = document.getElementById('cardNumber');
  let cardNumberSon = document.getElementById('cardNumberSon');

  cardNumber.onkeyup = function () {
    let me = cardNumber.value;
  
    if(isNaN(me)){
      cardNumberSon.style.display = 'block';
      
    } else {
      cardNumberSon.style.display = 'none'
    }


  }




 




  $('.accordion .title .question').on('click',function () {
    $(this).next().slideToggle(500);
    $('.accordion .title .answer').not($(this).next()).slideUp(500)
  })



  $('.learn-son div').on('click',function () {

    $('html , body').animate({
     
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 1000);

   
  });


 
 

  window.onscroll = function () {
    let top = document.getElementById('top');
    if(window.scrollY >=500){
        top.style.display = 'block'
    } else {
      top.style.display = 'none'
    }

   
    top.onclick = function () {

      window.scrollTo({
        top:0,
        behavior: 'smooth'
      });
    }
 
  }

 
 