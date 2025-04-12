// CODE SOURCED FROM https://swiperjs.com/get-started
// AND EDITED WITHIN https://www.youtube.com/watch?v=VUtJ7FWCfZA&list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2&ab_channel=CodingNepal SEE AT 13:15

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination Bulelets 
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   });