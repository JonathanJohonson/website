
$('header').load("../html/header.html");

$(function(){
    //load the button event
    var button = $('#light');
    button.click(function(){  
        var body = $('body');
        //if the light is on.
        if($(this).attr('status') == 'on'){     
            //turn off the light;
            body.css('background-color','#333333');
            $(this).attr('status','off');
            $(this).text('开灯');
        }else{
            //turn on the light
            body.css('background-color','white');
            this.innerText = '关灯';
            $(this).attr('status', 'on');
        }


    });
});