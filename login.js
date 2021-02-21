
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDAinAMKic3ITlxoMezPipdHzKkIedP3Uk",
    authDomain: "positivity-pal.firebaseapp.com",
    projectId: "positivity-pal",
    storageBucket: "positivity-pal.appspot.com",
    messagingSenderId: "716445014228",
    appId: "1:716445014228:web:7e5772a378b94babf00341"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("You have been signed up!");
    // ...
  })
  .catch((error) => {
    alert(error.code);
    var errorCode = error.code;
    var errorMessage = error.message;
    
  });


  }

  function signIn(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    // promise.catch(e=>alert(e.message));

    var authFlag = true;


    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
          .then((userCredential) => {
      // Signed in
      // alert("Signed In");
        var user = userCredential.user;
        window.location.replace("https://www.kommunicate.io/livechat-demo?appId=bc86772b23aeaef3eee125d1e7126e12&botIds=positivity-pal-9m5rb&assignee=positivity-pal-9m5rb");
  
    })
    .catch((error) => {
      alert(error.code);
      var errorCode = error.code;
      var errorMessage = error.message;
    });


    
    // auth.onAuthStateChanged( user => {
    //   console.log(user);
    //   if(authFlag) {
    //     authFlag = false;
    //     if (user) {
    //       alert("Signed In");
    //       // Do something,
    //     }
    //     else {
    //       alert("Not signed In");

    //       // Alert.alert("Auth Error")
    //     }
    //   }
    // });

  //  




  //   auth.onAuthStateChanged(function(user){
  //     if (user) {
  //       // User is signed in.
  //       alert("Signed In New Page");
  //      // signInSuccessUrl:'https://www.kommunicate.io/livechat-demo?appId=bc86772b23aeaef3eee125d1e7126e12&botIds=positivity-pal-9m5rb&assignee=positivity-pal-9m5rb';
  //       // window.location.replace("https://www.kommunicate.io/livechat-demo?appId=bc86772b23aeaef3eee125d1e7126e12&botIds=positivity-pal-9m5rb&assignee=positivity-pal-9m5rb");
  
  //     }
  //   else{
  //     alert("Not signed In no new Page");
  //       // window.location.replace("login.html");
  //   }
  
    
  //   });
  //   // alert("Signed in as " + email.value);

  // }


  // firebase.auth().signOut().then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });



  }; 