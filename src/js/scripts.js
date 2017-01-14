$(document).foundation();

$(document).ready(function() {
    $('.photo1-1').one('click', function(){
        $('#photo1-1').append('<h2 class="modalTitle">Photo</h2><img src="img/photos/photo1-large.jpg" alt="Photo one"><div class="info"> <div class="avatar modal-thumb-7"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
    $('.photo1-2').one('click', function(){
        $('#photo1-2').append('<h2 class="modalTitle">Photo</h2><img src="img/photos/photo2-large.jpg" alt="Photo two"> <div class="info"> <div class="avatar modal-thumb-2"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
    $('.photo1-3').one('click', function(){
        $('#photo1-3').append('<h2 class="modalTitle">Photo</h2> <img src="img/photos/photo3-large.jpg" alt="Photo three"> <div class="info"> <div class="avatar modal-thumb-7"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
    $('.photo2-1').one('click', function(){
        $('#photo2-1').append('<h2 class="modalTitle">Photo</h2> <img src="img/photos/photo4-large.jpg" alt="Photo four"> <div class="info"> <div class="avatar modal-thumb-4"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
    $('.photo2-2').one('click', function(){
        $('#photo2-2').append('<h2 class="modalTitle">Photo</h2> <img src="img/photos/photo5-large.jpg" alt="Photo five"> <div class="info"> <div class="avatar modal-thumb-5"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
    $('.photo2-3').one('click', function(){
        $('#photo2-3').append('<h2 class="modalTitle">Photo</h2> <img src="img/photos/photo6-large.jpg" alt="Photo six"> <div class="info"> <div class="avatar modal-thumb-6"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
    $('.photo3-1').one('click', function(){
        $('#photo3-1').append('<h2 class="modalTitle">Photo</h2> <img src="img/photos/photo7-large.jpg" alt="Photo seven"> <div class="info"> <div class="avatar modal-thumb-2"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
    $('.photo3-2').one('click', function(){
        $('#photo3-2').append('<h2 class="modalTitle">Photo</h2> <img src="img/photos/photo8-large.jpg" alt="Photo eight"> <div class="info"> <div class="avatar modal-thumb-6"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
    $('.photo3-3').one('click', function(){
        $('#photo3-3').append('<h2 class="modalTitle">Photo</h2> <img src="img/photos/photo9-large.jpg" alt="Photo nine"> <div class="info"> <div class="avatar modal-thumb-7"></div> <span class="attribution">Photo by <b>Werner Bechtelar</b></span> </div> <a class="close-reveal-modal" aria-label="Close">&#215;</a>');
    });
});