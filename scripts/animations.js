$('.menu').click(function () {
    $('.line1, .line2, .line3').toggleClass('active');
});

const recentwidth = $('.recent-items').width();

$('.recently-prev-button').click(function () {
    $('.recent-items').animate(
        {
            scrollLeft: '-=' + recentwidth * 1.08,
        },
        'slow'
    );
});
$('.recently-next-button').click(function () {
    $('.recent-items').animate(
        {
            scrollLeft: '+=' + recentwidth * 1.08,
        },
        'slow'
    );
});

const width = $('.top-categories-cards').width();
$('.categories-prev-button').click(function () {
    $('.top-categories-cards').animate(
        {
            scrollLeft: '-=' + width / 1.2,
        },
        'slow'
    );
});
$('.categories-next-button').click(function () {
    $('.top-categories-cards').animate(
        {
            scrollLeft: '+=' + width / 1.2,
        },
        'slow'
    );
});

$(document).ready(function () {
    var prevScrollpos = window.scrollY;
    var scrollThreshold = 10; 

    $(window).scroll(function () {
        var currentScrollPos = window.scrollY;

        if (prevScrollpos > currentScrollPos) {
            $('nav').css('top', '0');
            $('nav').css('box-shadow', '0 0 10px 0 rgba(0, 0, 0, 0.2)');
        } else {
            $('nav').css('top', '-100px');
        }

        if (currentScrollPos <= scrollThreshold) {
            $('nav').css('box-shadow', 'none');
        }

        prevScrollpos = currentScrollPos;
    });
});

$('.menu').click(function () {
    var mobileLinks = $('.mobile-links'); 

    if (mobileLinks.css('right') === '0px') {
        mobileLinks.animate({ right: '-100%' }, 'slow', function () {
        });
    } else {
        mobileLinks.animate({ right: '0px' }, 'slow');
    }
});
