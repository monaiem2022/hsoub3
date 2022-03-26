

// $('.img img').on('mouseover',function (e) {
//   $(this).next().slideToggle(500);
//   $('.aoutMember').not($(this).next()).slideUp(500);
 
// });




let timeoutID;

// صورة المستخدم
$(".img .answerImg").on("mouseover", function () {
  $(this).next().slideDown(500);  // إظهار التفاصيل بعد 
})
  
  .on("mouseleave", function () { 
    timeoutID = setTimeout(() => {   // إخفاء التفاصيل بعد  مغادرة الفأرة لها
      $(this).next().slideUp(500);
    }, 300);
  });


//  عنصر التفاصيل

$(".img .answerImg").next().on("mouseover", function () {     // عند وضع المؤشر نوقف دالة الإخفاء
  clearTimeout(timeoutID);
  $(this).next().slideDown(500);
}) 
  
  
  .on("mouseleave", function () {   // عند خروج المؤشر نخفي العنصر
    $(this).slideUp(500);
  });


  $('.showMore').on('click',function () {
  $('.moreAnswer').slideToggle(500);  
});


$('.aoutMemberFooter .fa-envelope').on('click',function () {
  $('.newMessage').show();
});

