// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says


// keys file
var keysjs = require("./keys.js");


//functions
var spotify = function (songToSearch){

// node-spotify-api NPM package.
	var Spotify = require("node-spotify-api");

	var spotify = new Spotify({
  		id: "1931813974c74ec0881af7eadf7bc95b",
  		secret: "9b490615fa10426d8d5adc750d2ab1d3"
	});

	spotify.search(
		{ 
			type: 'track', 
			query: songToSearch 
		}, 
		function(err, data) {
		if (err) {
			console.log('Error occurred: ' + err);
			return;
  		}
 
		console.log(data.tracks.items[0]);
		console.log(data.tracks.items[0]);
		console.log(data.tracks.items[0]);
		console.log(data.tracks.items[0]);
	});

}

var myTweets = function (){
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
// npm install --save twitter
};

var movieThis = function (movieToSearch){
var request = require('request');
request('http://www.omdbapi.com/?apikey=[yourkey]&t=' + movieToSearch , function (error, response, body) {
	console.log (body.)
});


};

var doWhat = function (){
	
};


var userInput = process.argv[2];
var userData = process.argv[3];

if (userInput === "spotify-this-song"){
	spotify(userData);	
}
if (userInput === "my-tweets"){
	myTweets();
}
if (userInput === "movie-this"){
	movieThis(userData);
}
if (userInput === "do-what-it-says"){
	doWhat ();
}


console.log (process.argv);