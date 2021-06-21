// capture scroll
$(window).scroll(function () {
    var top = $(window).scrollTop(), 
    winHeight = $('#hero-section').height();
    
    var scroll = (top / winHeight) * 100;
    
    $('.bg-scroll').css('width', (scroll + '%'));
});