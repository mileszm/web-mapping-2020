

// make an array of data objects and use jQuery to populate the album buttons
var albumData = [
  {
    albumArtist: 'Mitski',
    albumName: 'Bury Me at Makeout Creek',
    albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/95/Bury_Me_At_Makeout_Creek.jpg'
  },
  {
    albumArtist: 'Weezer',
    albumName: 'The Blue Album',
    albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png'
  },
  {
    albumArtist: 'Charli XCX',
    albumName: 'Vroom Vroom',
    albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/f/ff/VroomVroomEP.png'
  },
  {
    albumArtist: 'Tyler the Creator',
    albumName: 'Flower Boy',
    albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png'
  },
  {
    albumArtist: 'Wu-Tang Clan',
    albumName: 'Enter the Wu-Tang (36 Chambers)',
    albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Wu-TangClanEntertheWu-Tangalbumcover.jpg'
  }
]

albumData.forEach(function(thisAlbum) {
  var albumListing = `<div class="album-list-item" data-album-cover="${thisAlbum.albumCoverUrl}">
  				<a class="artist">${thisAlbum.albumArtist}</a>
  				<p class="album-name">${thisAlbum.albumName}</p>
  			</div>`;
  $('#album-list').append(albumListing);
})

// MOVED THIS BLOCK so that click event listener comes after items populated
// when any of these class are clicked
$('.album-list-item').on('click', function(){
// get the album cover url
	var albumCoverUrl = $(this).attr('data-album-cover')
// log for debugging
	console.log(albumCoverUrl)
// show the album art div
  $('#album-art').css('display','block')
// hide the instructions
  $('#instructions').css('display','none')
// set the background to the url
	$('#album-art').css('background-image', `url(${albumCoverUrl})` )
})
