function mainNavEff() {

    function setMenu() {

        $('#mainnav>ul>li').off('mouseenter mouseleave');
        $('#mainnav>ul>li>a').off('click');
        $('#menuBtn').removeClass('closeBtn');

        if (!window.matchMedia('(max-width:600px)').matches) {
            $('#menuBtn').hide();
            $('#mainnav').show();
            $('#mainnav ul ul').css({
                'position': 'relative',
                'top': 200,
                'left': 0
            }).hide();

            $('#mainnav>ul>li').hover(function () {
                $(this).children('ul').show().css({ 'opacity': 0 })
                    .stop().animate({ 'top': 0, 'opacity': 1 }, 1000);

                //stop記得要放在動畫之前
            }, function () {
                $(this).children('ul').stop()
                       .animate({ 'top': 200, 'opacity': 0 }, 1000, function () {
                    $(this).hide();
                });
                
            })
        } else {
            $('#menuBtn').show()
            $('#mainnav').hide();
            $('#mainnav ul ul').css({
                'position': 'static',
                'opacity': 1
            }).hide();
            $('#mainnav>ul>li>a').click(function () {
                $(this).next().slideToggle()
            })

        }


    }
    var winWidth = window.outerWidth;
    $(window).resize(function () {
        if (winWidth != window.outerWidth) {
            setMenu();
            winWidth = window.outerWidth;
        }

    })


    // $(window).resize();
    setMenu();

    $('#menuBtn').click(function () {
        $('#mainnav').slideToggle();
        $(this).toggleClass('closeBtn');
        return false;
    })

}