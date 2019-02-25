const initDB = () => {
  var config = {
    apiKey: "AIzaSyCT8Sgajy-1nLVRXLJo3rTsmve3KM7XyO4",
    authDomain: "todo-eb79a.firebaseapp.com",
    databaseURL: "https://todo-eb79a.firebaseio.com",
    projectId: "todo-eb79a",
    storageBucket: "todo-eb79a.appspot.com",
    messagingSenderId: "7815036995"
  };
  firebase.initializeApp(config);
}

export { initDB }

