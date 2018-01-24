// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says
var Spotify = require("node-spotify-api");
var Twitter = require('twitter');
var keysjs = require("./keys.js");
var search = process.argv

console.log(search);

function start () {


			if(search[2] === 'spotify-this-song') {

				var searchSpotify = function (songToSearch){

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
							
					  		}
					  

					  		console.log(data);
				 
				 			 var userInput = data.tracks.items;
				 			 // console.log(userInput)
				     			for (var i = 0; i < userInput.length; i++) {
				     			console.log(userInput[i])
						        console.log("Song's Name:" + userInput[i].name);
						        console.log("Preview Link:" + userInput[i].preview_url);
						        console.log("Song Album: " + userInput[i].album.name);
					  		}
					      
				   

						});

				}
				searchSpotify( search[3])
			
		}
		else if (search[2] === 'my-tweets'){
			var myTweets = function (){
			 
				var client = new Twitter({
				   consumer_key: 'fZAeRO4XHZ74IemIz8GnwBi2H',
				  consumer_secret: "gqUQuOY5qRNhTkDxJCpeuKAbEwZ4jqOd3JayHn3x4KjXMkYjTN",
				  access_token_key: '955669962852454401-qy6bbBLOYS20edieLR7QOWgxKYfV0WN',
				  access_token_secret: 'eDSbBjZsxuIBNwlVA6T56lm1DB0llPhvFAN8ReREYDXHr'
				});
			 
				var params = {
				  screen_name: 'ucbxwin'
				};

				client.get('statuses/user_timeline', params, function(error, tweets, response) {
				  // console.log(response);
				  for (var i = 0; i < tweets.length; i++) {
        			console.log(tweets[i]);
    				}

			  });
			};
			myTweets();
		}
		else if (search[2] === 'ombd') {

			var movieThis = function (movieToSearch){

				if(noMovie === undefined) {
				    noMovie = "Mr Nobody";
			  	}

				var request = require('request');

				request('http://www.omdbapi.com/?apikey=ad77e624&t=' + movieToSearch , function (error, response, body) {
				console.log (body);


			  console.log("Title of the movie: " +     );
		      console.log("Year the movie came: " +    );
		      console.log("IMDB rating of the movie: " +    );
		      console.log("Rotten Tomatoes Rating of the movie: "+    );
		      console.log("Country where the movie was produced: " +    );
		      console.log("Language of the movie: " +);
		      console.log("Plot of the movie: " +     );
		      console.log("Actors in the movie: " + );	

		     	});

	    	}
	   }

		else if (search[2] === 'do-what-it-says') {
			var doWhatItSays = function (){
				fs.readFile("random.txt", "utf8", function(error, data) {
	    		console.log(data);
				};
		}

}
start();

	// var userInput = process.argv[2];
	// var userData = process.argv[3];

	// if (userInput === "spotify-this-song"){
	// 	spotify(userData);	
	// }
	// if (userInput === "my-tweets"){
	// 	myTweets();
	// }
	// if (userInput === "movie-this"){
	// 	movieThis(userData);
	// }
	// if (userInput === "do-what-it-says"){
	// 	doWhat ();
	// }


	// console.log (process.argv);