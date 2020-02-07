//when any of these class are clicked
$('.album-list-item').on('click', function(){
//get the album cover url
	var albumCoverUrl = $(this).attr('data-album-cover')
//log for debugging
	console.log(albumCoverUrl)
//show the album art div
  $('#album-art').css('display','block')
//hide the instructions
  $('#instructions').css('display','none')
//set the background to the url
	$('#album-art').css('background-image', `url(${albumCoverUrl})` )
})
