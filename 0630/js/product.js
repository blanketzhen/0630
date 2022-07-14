function productMenuEff(page,item) {

    $('#productMenu ul ul').hide();

        $('#productMenu>ul>li>a').click(function () {
            $(this).next().stop().slideToggle();                      
        })
    
    $('#productMenu ul ul').eq(page).slideDown()
    $('#productMenu ul ul').eq(page).children('li').eq(item).children('a')
    .addClass('nowPage')
    // nowPage寫在procduct.css裡

    // 以上三行相同部分可以串接：
    // $('#productMenu ul ul').eq(page).slideDown().children('li').eq(item).children('a')
    // .addClass('nowPage')

    
}