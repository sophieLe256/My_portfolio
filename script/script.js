$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });


    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        } else {
            $('.top').hide(); 
        }

    });

    //smooth scrolling 
    
    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
        },
            300,
            'linear'
        );

    });

});


// Message - Noti
function message() {
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var project = document.getElementById('project');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === '' || project.value === ''){
        danger.style.display = 'block';
    } else {
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            project.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }
}

