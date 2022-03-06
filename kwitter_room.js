const firebaseConfig = {
    apiKey: "AIzaSyCivf5i5HIkqzHzj_QK-4KKLaEuaptv_O0",
    authDomain: "kwitter-app-397f1.firebaseapp.com",
    databaseURL: "https://kwitter-app-397f1-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-397f1",
    storageBucket: "kwitter-app-397f1.appspot.com",
    messagingSenderId: "386150458946",
    appId: "1:386150458946:web:38120b0a65c9c5a6cf2fdb",
    measurementId: "G-RWLSGJ5YNJ"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name"); 
   room_name = localStorage.getItem("room_name");

   function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}