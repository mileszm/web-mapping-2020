

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



// USING THE CONSOLE LOG TO LEARN ABOUT DATA TYPES

// number
var number = 3

// string
var name = 'Miles'

// boolean
var rainy = true

console.log(number, typeof number)
console.log(name, typeof name)
console.log(rainy, typeof rainy)

// operators
console.log('opposite of rainy? ', !rainy)
console.log('add 5?', number + 5)


// loops
var timesToRun = 10

for (var i = 0; i <= timesToRun; i++) {
  // this code block runs while the for expression is true
  // it will run as long as i is less than or equal to the timesToRun var
  console.log('counting down', timesToRun, 'times:', i)
}

// arrays
var arrayOfStrings = ['Miles','no','why','help']

var arrayOfNumbers = [12, 8, 9, 72]

console.log('log the array:', arrayOfStrings)

console.log(arrayOfStrings.length)

console.log('get the 3rd item in the array', arrayOfStrings[2]) // 0 is first

// iterate through array elements
arrayOfStrings.forEach(
  function(sayString) {
    console.log(sayString)
  }
)

console.log('mix two arrays:',arrayOfStrings[3], arrayOfNumbers[2])

// template literal
// back ticks `` contain $ template items
console.log(`This combines the string ${arrayOfStrings[1]} and the number ${arrayOfNumbers[1]}`)
