// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});


// Spinner
// var spinner = function () {
//     setTimeout(function () {
//         if ($('#spinner').length > 0) {
//             $('#spinner').removeClass('show');
//         }
//     }, 1);
// };
// spinner();

// <!-- Spinner code start: -->
// <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
//     <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
//         <span class="sr-only">Loading...</span>
//     </div>
// </div>
// <!-- Spinner End -->
