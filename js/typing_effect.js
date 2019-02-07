function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html('');

    var i = 0;
    var timer = setInterval(function(){
        if (i < text.length){
            $(element).append(text.charAt(i));
            i++;
        } 
        else{
            clearInterval(timer);
        }
    }, speed);
}

$(document).ready(function(){
    var speed = 75;
    var delay = $('.naslov').text().length * speed + speed;
    var delay2 = $('.text').text().length * speed + speed + delay;
    $('.naslov').css('display', 'flex');
    typeEffect($('.naslov'), speed);
    setTimeout(function(){
        $('.text').css('display', 'flex');
        typeEffect($('.text'), speed);
    }, delay);
    setTimeout(function(){
        $('.text2').css('display', 'flex');
        typeEffect($('.text2'), speed);
    }, delay2);
});