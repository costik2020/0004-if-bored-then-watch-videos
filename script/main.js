console.log("hellow there");

let boredResponse;

//Grab the element you want to dispaly

// Request a task from Bored API

fetch("http://www.boredapi.com/api/activity/")
.then( (response)=>{
	console.log("response=",response);
	return response.json()
} )
.then( (boredObj)=>{
	console.log("boredObj=",boredObj);
	console.log("boredObj.activity=",boredObj.activity);
  } )


