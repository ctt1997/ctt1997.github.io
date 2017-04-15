/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 14:49:36
 * @version $Id$
 */
$(init)
function init(){
	$('.infirstbox-bigimg').hide()
    $('.infirstbox-img').click(function(){
		$('.infirstbox-bigimg').src=$(this).attr('src');
        $('.infirstbox-bigimg').show();
    });
    $('.infirstbox-bigimg').click(function(){
        $('.infirstbox-bigimg').hide();
	});

    $('.top-left').click(function(){
        $('.top-left').css('background','rgb(192,192,192)');
        $('.bottom').text('1');
        $('.top-middle').css('background','white');
        $('.top-right').css('background','white');
    });
    $('.top-middle').click(function(){
        $('.top-middle').css('background','rgb(192,192,192)');
        $('.bottom').text('2');
        $('.top-left').css('background','white');
        $('.top-right').css('background','white');
    });
    $('.top-right').click(function(){
        $('.top-right').css('background','rgb(192,192,192)');
        $('.bottom').text('3');
        $('.top-left').css('background','white');
        $('.top-middle').css('background','white');
    });

    $('.add').click(function(){
      var newdelete='<div class=delete><div class=first-head>4</div><div class=first-body></div><button class=first-end>Delete</button></div>';
        $('.delete').eq(-1).after(newdelete);
    });
    $(document).on("click",".first-end",function(){ 
      var n=$(".first-end").index(this);
      	$(".delete").eq(n).remove();
    });
}

