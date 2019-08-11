
var database;

function setupDatabase()
{
	var config = {
	apiKey: "AIzaSyBdpf6rJxtgg3JC-XS4G5zQsRLJWm6OR5k",
	authDomain: "modmaker-3283d.firebaseapp.com",
	databaseURL: "https://modmaker-3283d.firebaseio.com",
	storageBucket: "modmaker-3283d.appspot.com",
	};
	firebase.initializeApp(config);

	database = firebase.database();
}


function saveMod(aMod){
	database.ref("mods").push(aMod);
}


function createMod()
{
	var aMod = {};
	aMod.Name = "mymod";
	aMod.Description = "";
	aMod.JSCode = "";
	aMod.BlocklyXML = "";
	aMod.Owner = "thefiddleguy";

	database.ref("mods").push(aMod);


}