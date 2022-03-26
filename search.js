$('.searchKeyword').on('click',function () {
  $('.searchBook').css('margin-right','0');
  $('.inputSerachSon .block').css('display','block');
  $('.inputSerachSon').css('padding-top','20px');
  $(this).children('input').show(200);
  $('.keyword').hide();
  // $('.keyword').next().slideToggle(500);
  // $('.searchBook').css('margin-right','0') 
});

$('.searchBook').on('click',function () {
  $('.searchBook').css('margin-right','0');
  $('.inputSerachSon').css('display','block');
  $(this).children('input').show(200);
  $('.booky').hide();
});

$('.radio').on('click',function () {
  $('.radio').removeClass('radio1');

  $(this).addClass('radio1');


  // $('.tasneef').show();
  // $('.tasneef').text($(this).find('.tasneef2').text());
});


$('.radio2').on('change',function () {
  $('.radio2').not(this).prop ('checked', false);
});



let tasneef = document.getElementById('tasneef');
let chooseButton = document.getElementById('chooseButton');
let choose = document.getElementById('choose');
let kotobradio = document.getElementById('kotobradio');


// kotobradio.onclick = function () {
//   if(tasneef.style.display =='block'){
//     tasneef.style.display = 'none'
//   }  else {
//     tasneef.style.display = 'block';
   
//   }

// }

chooseButton.onclick = function () {
 
  if(tasneef.style.display =='block'){
    tasneef.style.display = 'none';
   
  } else {
    tasneef.style.display = 'block';
    tasneef.style.height = '340px'
  }

}

$('.radio').on('click',function () {
  $('.tasneef').show();
  $('.tasneef').css('bottom','50%');
  $('.choose').show();
  $('.c1').text($(this).find('.d1').text());
  $('.c2').text($(this).find('.d2').text());
});


