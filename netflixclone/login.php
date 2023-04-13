<?php 
$email = $_REQUEST['email'];


$servername = "localhost";
$username = "root";
$password = "ShiyamRam@18";
$databasename = "netflix";

// Create connection
$conn = new mysqli($servername, $username, $password, $databasename);

// Check connection
if($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else{
    $sql = "SELECT * FROM `users` WHERE `email` LIKE '$email'";

    $res = $conn->query($sql);
    if ($res->num_rows > 0){
      //print_r($res); 
      print_r("Record found");
    }
    else{
       print_r(' NO Record found');
    }
    }


$conn->close();

?>