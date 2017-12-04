var app;

try {
	app = firebase.app();
}

catch(e) {
	console.log('Initializing APP');
	
	config = {
		apiKey:"AIzaSyChPwIV73hCe12Bldg_JlcVCHRwEQdUX1U",
		authDomain: "cse-134b-hw5-pap.firebaseapp.com/",
		databaseURL: "https://cse-134b-hw5-pap.firebaseio.com/",
		storageBucket: "cse-134b-hw5-pap.appspot.com",
	};

	app = firebase.initializeApp(config);
}

