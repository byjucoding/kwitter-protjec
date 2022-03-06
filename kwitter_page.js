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

 user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}