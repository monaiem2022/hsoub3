let signIn = document.getElementById('signIn');
let close = document.getElementById('close');
let confirm1 = document.getElementById('confirm1');
let confirm2 = document.getElementById('confirm2');
let email = document.getElementById('email');
let exampleModalLabel = document.getElementById('exampleModalLabel');
let allModal = document.getElementById('allModal');
let button = document.getElementById('button');




// confirm1.onclick = function (e) {
//   e.preventDefault();
//   if(email.value == false  || password.value == false ){
//     exampleModalLabel.innerHTML = 'برجاء التحقق';
//     signIn.innerHTML != email.value;
//   }else{
//     exampleModalLabel.innerHTML = ' تم تسجيل الدخول';
//     allModal.style.display = 'none';
//     confirm1.style.display = 'none';
//     confirm2.style.display = 'inline-block';
//     signIn.innerHTML = email.value;
//     signIn.style.maxWidth = '120px';
//     signIn.style.overflow = 'hidden'
//   }

//   signIn.onclick = function () {
//     if(signIn.innerHTML !='تسجيل الدخول'){
//       allModal.style.display = 'block';
//       exampleModalLabel.innerHTML = 'هل تريد تسجيل الخروج؟';
//       confirm2.innerHTML = 'نعم';
//       close.innerHTML = 'لا'
//     }else{
//       alert('no')
//     }

//   }

// }

//end of sign in modal validation

function ckeckPassword() {
  var passLength = password.value.length;
  if (password.value == '' || passLength <= 8) {
    return false;
  }else{
          
    return true;
  }
  
}



confirm1.onclick = function (e) {
  e.preventDefault();
  
  if (ckeckPassword() === true) {//هنا عملية التحقق
    
    if (email.value == false || password.value == false) {
      exampleModalLabel.innerHTML = 'برجاء التحقق';
      signIn.innerHTML != email.value;
    } else {
      button.innerHTML = email.value;
      button.style.overflow = 'hidden';
      allModal.style.display = 'none';
      confirm1.style.display = 'none';
      confirm2.style.display = 'inline-block';
      signIn.innerHTML = email.value;
      signIn.style.overflow = 'hidden';
    }


  } else {
    //اذا كان التحقق خاطء
    exampleModalLabel.innerHTML = 'الباسورد يجب ان ايكون اكبر من 8';
    exampleModalLabel.style.opacity = '.6';
    exampleModalLabel.style.fontSize = '16px';
  }


  



 
signIn.onclick = function () {
  if(signIn.innerHTML == 'تسجيل الدخول'){
    allModal.style.display = 'block';
    confirm1.style.display = 'inline-block';
    confirm2.style.display = 'none';
  }else{
    allModal.style.display = 'none';
  }
}

}



let messageIcon = document.getElementById("messageIcon");
let absoluteMessage = document.getElementById("absoluteMessage");
let mustSign = document.getElementById('mustSign');
let closeAbsoluteMessage = document.getElementById('closeAbsoluteMessage');

messageIcon.onclick = function () {

  if(signIn.innerHTML == 'تسجيل الدخول'){
    mustSign.style.display = 'block';
    bellAbsolute.style.display = 'none';
  } else{
    absoluteMessage.style.display = 'block';
    bellAbsolute.style.display = 'none';
    mustSign.style.display = 'none'
  }
}


closeAbsoluteMessage.onclick = function () {
  absoluteMessage.style.display = 'none'
}


let bellIcon = document.getElementById('bellIcon'),
bellAbsolute = document.getElementById('bellAbsolute');

bellIcon.onclick = function () {
  if(signIn.innerHTML == 'تسجيل الدخول'){
    mustSign.style.display = 'block';
    bellAbsolute.style.display = 'none';
  } else{
    bellAbsolute.style.display = 'block';
    absoluteMessage.style.display = 'none';
    mustSign.style.display = 'none';
  
  }
}


let closeBellAbsolute = document.getElementById('closeBellAbsolute');

closeBellAbsolute.onclick = function () {
  bellAbsolute.style.display = 'none'
}









$('.content img').on('click',function(){
  $('.d-flex').html('عارف انك عاوزهم لينك بس مش دلوقتى هههه')
});


$('.footerIcon').on('click',function(){
  $('.go').html('لا يوجد شئ لعرضه فى الوقت الحالى');
   
});



$('.new').on('click',function(){
  $('.newMessage').show();
  $('.absolute-message').hide()
});



$('.closeMessageSon').on('click',function(){
  $('.newMessage').hide();
  $('.absolute-message').hide()
});


$('.footerIcon').on('click',function(){
  $('.bellAbsoluteFooter').html('لا يوجد شئ لعرضه فى الوقت الحالى')
})



let boldFont = document.getElementById('boldFont');
let underlinedFont = document.getElementById('underlinedFont');
let leftFont = document.getElementById('leftFont');
let rightFont = document.getElementById('rightFont');
let middleFont = document.getElementById('middleFont');
let textarea = document.getElementById('textarea');

boldFont.onclick = function () {
  if(textarea.style.fontWeight == '800'){
    textarea.style.fontWeight = '200';
  } else {
    textarea.style.fontWeight = '800'
  }
}

underlinedFont.onclick = function () {
  if(textarea.style.textDecoration == 'underline'){
    textarea.style.textDecoration = 'none';
  } else {
    textarea.style.textDecoration = 'underline'
  }
}

middleFont.onclick = function () {
  textarea.style.textAlign = 'center'
}

leftFont.onclick = function () {
  if(textarea.style.textAlign== 'center'){
    textarea.style.textAlign = 'left';
    textarea.style.paddingLeft = '20px'
  } else{
    textarea.style.textAlign = 'left'
  }

}

rightFont.onclick = function () {
  if(textarea.style.textAlign== 'center'){
    textarea.style.textAlign = 'right';
  } else{
    textarea.style.textAlign = 'right'
  }

}




   let dropdownMenu2 = document.getElementById('dropdownMenu2'),
    dropdownSon = document.getElementById('dropdownSon');
    newMessage = document.getElementById('newMessage');

    dropdownMenu2.onclick = function () {
     if(dropdownSon.style.display == 'block'){
       dropdownSon.style.display = 'none';
     } else {
       dropdownSon.style.display = 'block'
     }
   }
   

   let send = document.getElementById('send');
      

   send.onclick = function () {
     if(textarea.value == ''){
       textarea.innerHTML = 'مينفعش تبعت قبل ما تكتب الرسالة و الا هتعصبنى عليك.....'
     } 
     else if (textarea.value == 'مينفعش تبعت قبل ما تكتب الرسالة و الا هتعصبنى عليك.....'){
       textarea.innerHTML = 'انت مصمم تعصبنى عليك....'
     } 
     else if(textarea.value =='انت مصمم تعصبنى عليك....' ){
       textarea.innerHTML = 'مرة كمان و هيتفل حسابك...'
     }
     else if (textarea.value == 'مرة كمان و هيتفل حسابك...'){
       signIn.innerHTML = 'تسجيل الدخول';
       newMessage.style.display = 'none';
       absoluteMessage.style.display = 'none';
       textarea.innerHTML = '';
     }
     else {
       textarea.innerHTML = ''
     }
   }










$('.main').on('mouseover',function(){
  $('.activity-title1').show();
  $('.activity-title2').hide();
  $('.activity-title3').hide();
  $('.activity-title4').hide();
  $('.activity-title5').hide();
  $('.activity-title6').hide();
})

$('.my-courses').on('mouseover',function(){
    $('.activity-title1').hide();
    $('.activity-title2').show();
    $('.activity-title3').hide();
    $('.activity-title4').hide();
    $('.activity-title5').hide();
    $('.activity-title6').hide();
  })
  
  $('.articles').on('mouseover',function(){
    $('.activity-title1').hide();
    $('.activity-title2').hide();
    $('.activity-title3').show();
    $('.activity-title4').hide();
    $('.activity-title5').hide();
    $('.activity-title6').hide();
  })
  
  $('.answers').on('mouseover',function(){
    $('.activity-title1').hide();
    $('.activity-title2').hide();
    $('.activity-title3').hide();
    $('.activity-title4').show();
    $('.activity-title5').hide();
    $('.activity-title6').hide();
  })
  
  $('.books').on('mouseover',function(){
    $('.activity-title1').hide();
    $('.activity-title2').hide();
    $('.activity-title3').hide();
    $('.activity-title4').hide();
    $('.activity-title5').show();
    $('.activity-title6').hide();
  })
  
  $('.courses').on('mouseover',function(){
    $('.activity-title1').hide();
    $('.activity-title2').hide();
    $('.activity-title3').hide();
    $('.activity-title4').hide();
    $('.activity-title5').hide();
    $('.activity-title6').show();
  });
  
  //end of activity section


$('.smallScreenIcon').on('click',function(){
  $(this).toggleClass('malek');
  if($(this).hasClass('malek')){
 
    $('.fixed-menu').animate({
     
      left : 0 ,
    }, 500);
  }
});



$('.business').on('click',function(){
  $('.rotationBusiness').show();
  $('.rotationFreelancing').hide();
  $('.rotationMarketing').hide();
  $('.rotationProgramming').hide();
  $('.rotationDesign').hide();
  $('.rotationDevops').hide();
  $('.rotationApp').hide();
  $('.rotationSpicialist').hide();
})




$('.freelancing').on('click',function(){
  $('.rotationBusiness').hide();
  $('.rotationFreelancing').show();
  $('.rotationMarketing').hide();
  $('.rotationProgramming').hide();
  $('.rotationDesign').hide();
  $('.rotationDevops').hide();
  $('.rotationApp').hide();
  $('.rotationSpicialist').hide();
})


$('.marketing').on('click',function(){
  $('.rotationBusiness').hide();
  $('.rotationFreelancing').hide();
  $('.rotationMarketing').show();
  $('.rotationProgramming').hide();
  $('.rotationDesign').hide();
  $('.rotationDevops').hide();
  $('.rotationApp').hide();
  $('.rotationSpicialist').hide();
})

$('.programming').on('click',function(){
  $('.rotationBusiness').hide();
  $('.rotationFreelancing').hide();
  $('.rotationMarketing').hide();
  $('.rotationProgramming').show();
  $('.rotationDesign').hide();
  $('.rotationDevops').hide();
  $('.rotationApp').hide();
  $('.rotationSpicialist').hide();
});

$('.design').on('click',function(){
  $('.rotationBusiness').hide();
  $('.rotationFreelancing').hide();
  $('.rotationMarketing').hide();
  $('.rotationProgramming').hide();
  $('.rotationDesign').show();
  $('.rotationDevops').hide();
  $('.rotationApp').hide();
  $('.rotationSpicialist').hide();
})

$('.devops').on('click',function(){
  $('.rotationBusiness').hide();
  $('.rotationFreelancing').hide();
  $('.rotationMarketing').hide();
  $('.rotationProgramming').hide();
  $('.rotationDesign').hide();
  $('.rotationDevops').show();
  $('.rotationApp').hide();
  $('.rotationSpicialist').hide();
});

$('.app').on('click',function(){
  $('.rotationBusiness').hide();
  $('.rotationFreelancing').hide();
  $('.rotationMarketing').hide();
  $('.rotationProgramming').hide();
  $('.rotationDesign').hide();
  $('.rotationDevops').hide();
  $('.rotationApp').show();
  $('.rotationSpicialist').hide();
})

$('.spicialist').on('click',function(){
  $('.rotationBusiness').hide();
  $('.rotationFreelancing').hide();
  $('.rotationMarketing').hide();
  $('.rotationProgramming').hide();
  $('.rotationDesign').hide();
  $('.rotationDevops').hide();
  $('.rotationApp').hide();
  $('.rotationSpicialist').show();
})


let business = document.getElementById('business');
let freelancing = document.getElementById('freelancing');
let result = document.getElementById('result');

business.onclick = function () {
  result.innerHTML = business.innerHTML;
  result.style.color = '#3c6994';
}

freelancing.onclick = function () {
  result.innerHTML = freelancing.innerHTML;
  result.style.color = '#3c6994';
}

marketing.onclick = function () {
  result.innerHTML = marketing.innerHTML;
  result.style.color = '#3c6994';
}

programming.onclick = function () {
  result.innerHTML = programming.innerHTML;
  result.style.color = '#3c6994';
}

design.onclick = function () {
  result.innerHTML = design.innerHTML;
  result.style.color = '#3c6994';
}

devops.onclick = function () {
  result.innerHTML = devops.innerHTML;
  result.style.color = '#3c6994';
}

app.onclick = function () {
  result.innerHTML = app.innerHTML;
  result.style.color = '#3c6994';
}

spicialist.onclick = function () {
  result.innerHTML = spicialist.innerHTML;
  result.style.color = '#3c6994';
}



$('.follow li').on('mouseover',function (){
  $('.follow li').removeClass('active');
  $('.follow li').css('color','#fff');
  $(this).addClass('active');
  $(this).css('color','#000');
 
})

$('.main').on('mouseout',function(){
  $(this).css('background-color','gray')
});



$('.smallScreenIcon').on('click', function () {
  $(this).toggleClass('malek');
  if($(this).hasClass('malek')){
    $('.fixed-menu').animate({
         left : 0
         
    }, 500)
  } 

})    // this function is to small-screen in html

$('.close').on('click',function (){
  $('.fixed-menu').animate({
    left : '-320px'
  }, 500)
});

$('.myaccountIcon').on('click', function () {
 
  


  $(this).toggleClass('ll');
  if($(this).hasClass('ll')){
    $('.myaccount').animate({
         left : '-300px'
         
    }, 500)
  } 

  $('.myaccount2').animate({
     left:0
  }, 500)

})    // this function is to small-screen in html



$('.back').on('click', function () {
  $(this).toggleClass('ll');
  if($(this).hasClass('ll')){
    $('.myaccount').animate({
         left : 0
         
    }, 500)
  } 

  $('.myaccount2').animate({
    left : '-300px'
    
}, 500)

  
  
})    // this function is to small-screen in html



let myaccount = document.getElementById('myaccount');
let myaccount2 = document.getElementById('myaccount2');
let back = document.getElementById('back');

$('.myaccountIcon').on('click',function(){
  if(myaccount.style.left ==='0'){
    myaccount.style.left = '-300px';
    myaccount2.style.left = '0';
  
  } else{
    myaccount.style.left = '-300px';
    myaccount2.style.left = '0';
 
  }
});

$('.back').on('click',function(){
  if(myaccount2.style.left === '-300px'){
    myaccount2.style.left = '0';
    myaccount.style.left = '-300px';
    
    
  } else {
    myaccount2.style.left = '-300px';
    myaccount.style.left = '0';
    
  }
})






$('#search').on('keyup',function(){
  $('.searchSon').show();
  let search2 = $('#search');
  let final = search2.val();
  let searchResult = $('.searchResult');
  $('.searchSon2').hide();

  if(final.includes('ريادة')){
    $('.ryada').show();
  }
 if (final.includes('رياده')){
    $('.ryada').show()
  }
 
 if(final.includes('برمجة')){
    $('.parmaga').show()
  }

 if (final.includes('برمجه')){
    $('.parmaga').show()
  }

  if(final.includes('مقالات')){
    $('.searchSon div').show();
  }

  if (final.includes('تصميم')){
    $('.parmaga').show();
    $('.tasmem').show();
    $('.ops').show();
  }
  if (final.includes('css')){
    $('.parmaga').show();
    $('.ops').show();
  }

  if (final.includes('html')){
    $('.parmaga').show();
    $('.ops').show();
  }

  if (final.includes('javascript')){
    $('.parmaga').show();
    $('.tasmem').show();
  }

  if (final.includes('python')){
    $('.parmaga').show();
    $('.tasmem').show();
    $('.ops').show();
  }
 
});


$('#search').on('click',function (){
  $('.mustSign').hide();
  $('.searchSon').show();

})




let smallScreenSearch = document.getElementById('smallScreenSearch');
let search = document.getElementById('search');
let searchSon = document.getElementById('searchSon');

smallScreenSearch.onclick = function () {

   if (search.style.display == 'block'){
     search.style.display = 'none';
     searchSon.style.display = 'none';
   }  else {
     search.style.display = 'block';
   
   }
}

// searchSon.children('div').onmouseout = function () {
//   searchSon.style.backgroundColor= 'green'
// }






