//放大镜
$('.head_glass').hover(function(){
	$('#headSearch').animate({width:'170px'},200).css('display','block');
}),function(){
	$('#headSearch').animate({width:'0px'},200).css('display','none');
}
$('#search_text').on('focus',function(){
	$('.hot_search').css('display','block')
})
$('#search_text').on('blur',function(){
	$('.hot_search').css('display','none')
})