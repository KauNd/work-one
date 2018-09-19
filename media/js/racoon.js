jQuery(document).ready(function(){

    jQuery(document).on('scroll', function(){
        jQuery('body .numberAnimation').each(function(){
            if (isScrolledIntoView(this)) {
                jQuery(this).animateNumber({ number: jQuery(this).attr('data-until') }, 5000);
                jQuery(this).removeClass('numberAnimation');
            }
        });
    });

    jQuery('body #racoon-slider').each(function(){
        jQuery(this).owlCarousel({
            loop:true,
            margin:0,
            items:1,
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:true,
            smartSpeed:750
        });
    });

});

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}