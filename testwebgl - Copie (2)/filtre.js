$(document).ready(function(){
    $('.category_item').click(function(){
        var category= $(this).attr('id');
        if(category == 'all'){
            $('.design_item').addClass('hide');
            setTimeout(function(){
                $('.design_item').removeClass('hide');
            }, 300);

        } else{
            $('.design_item').addClass('hide');
            setTimeout(function(){
                $('.' + category).removeClass('hide');
            }, 300);
        }
        $(this).addClass('active').siblings().removeClass('active');

    });
});

