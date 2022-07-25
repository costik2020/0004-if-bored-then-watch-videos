

let boredResponse;
let url;

//Grab the element you want to dispaly
let activityYouTube = document.querySelector(".activityYouTube");
let refreshApi = document.querySelector(".refreshApi");




refreshApi.addEventListener( "click", (e)=>{
	//console.log("activityYouTube=",activityYouTube);
	//activityYouTube.textContent = "hey can you read this?";


	// Request a task from Bored API
	fetch("http://www.boredapi.com/api/activity/")
	.then( (response)=>{
		console.log("response=",response);
		return response.json()
	} )
	.then( (boredObj)=>{
		console.log("boredObj=",boredObj);
		console.log("boredObj.activity=",boredObj.activity);
		activityYouTube.textContent = boredObj.activity;
		boredResponse = boredObj.activity;

		// Build the url
		url="";
		//url= 'https://google.com';
		//url="https://www.youtube.com/results?search_query=oceans+are+deep"
		//url = "https://www.youtube.com/";
		let searchQuery="";
		searchQuery= boredResponse.toLowerCase();
		// console.log(p.replaceAll('dog', 'monkey'));
		searchQuery= searchQuery.replaceAll(" ", "+");
		url=`https://www.youtube.com/results?search_query=${searchQuery}`;
		console.log("url=",url);


		// Open a new tab
		window.open(url, '_blank');

	  } )
	  .catch( (error)=>{
		  console.log("Sorry something went wrong :(");
	  } )



} );












