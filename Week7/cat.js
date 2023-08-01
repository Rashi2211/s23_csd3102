$(document).ready(function(){

    $('#btn').click(function(){

        $('.cat-card p').slideToggle("slow")

    });

    $('.cat-card').hover(

        function(){

            $(this).css('box-shadow','0 0 1px #9ecaed');

        },

        function(){

            $(this).css('box-shadow','none');

        }

    );

});