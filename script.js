$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('nav').addClass('black');
		$('nav').removeClass('navbar-light');
		$('nav').addClass('navbar-dark')
	} else{
		$('nav').removeClass('black');
		$('nav').addClass('navbar-light');
		$('nav').removeClass('navbar-dark');
	}
})

// event navbar
$('.page-scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -70
    }, 500)

    e.preventDefault();
});

$('#talk').on('click', function(){
	alert('Pesan terkirim.');
});

$(window).on('load', function(){
	$('.pLeft').addClass('muncul');
	$('.pRight').addClass('muncul');
})

$(window).scroll(function(){
	const wScroll = $(this).scrollTop();

	if (wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .card').each(function(i){
			setTimeout(function(){
				$('.portfolio .card').eq(i).addClass('cardUp');
			}, 300 * (i+1));
		})
	}
});