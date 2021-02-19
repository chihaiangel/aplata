$(()=>{
  $('[data-fancybox]').fancybox({
    touch: false,
  });
  $('.certificates__img').fancybox({});

  $(".menu-toggle").click(()=>{
    $(".navbar").toggleClass('active');
  });
});
