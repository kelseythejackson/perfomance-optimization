$(document).foundation();

$(document).ready(function() {
    $('.photo1-1').one('click', function(){
        $('<img src="img/photos/large/photo1.jpg" alt="Photo one">').insertAfter('#photo1-1 .modalTitle');
    });
    $('.photo1-2').one('click', function(){
        $('<img src="img/photos/large/photo2.jpg" alt="Photo two">').insertAfter('#photo1-2 .modalTitle');
    });
    $('.photo1-3').one('click', function(){
        $('<img src="img/photos/large/photo3.jpg" alt="Photo three">').insertAfter('#photo1-3 .modalTitle');
    });
    $('.photo2-1').one('click', function(){
        $('<img src="img/photos/large/photo4.jpg" alt="Photo four">').insertAfter('#photo2-1 .modalTitle');
    });
    $('.photo2-2').one('click', function(){
        $('<img src="img/photos/large/photo5.jpg" alt="Photo five">').insertAfter('#photo2-2 .modalTitle');
    });
    $('.photo2-3').one('click', function(){
        $('<img src="img/photos/large/photo6.jpg" alt="Photo six">').insertAfter('#photo2-3 .modalTitle');
    });
    $('.photo3-1').one('click', function(){
        $('<img src="img/photos/large/photo7.jpg" alt="Photo seven">').insertAfter('#photo3-1 .modalTitle');
    });
    $('.photo3-2').one('click', function(){
        $('<img src="img/photos/large/photo8.jpg" alt="Photo eight">').insertAfter('#photo3-2 .modalTitle');
    });
    $('.photo3-3').one('click', function(){
        $('<img src="img/photos/large/photo9.jpg" alt="Photo nine" >').insertAfter('#photo3-3 .modalTitle');
    });
});