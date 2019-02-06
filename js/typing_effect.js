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
    $('.naslov').css('display', 'flex');
    typeEffect($('.naslov'), speed);
    setTimeout(function(){
        $('.text').css('display', 'flex');
        typeEffect($('.text'), speed);
    }, delay);
});