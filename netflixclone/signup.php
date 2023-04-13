<?php
$email = $_REQUEST['email'];
$lpassword = $_REQUEST['password'];



$servername = "localhost";
$username = "root";
$password = "ShiyamRam@18";
$databasename = "netflix";

$conn = new mysqli($servername, $username, $password, $databasename);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else{
  $sql = "SELECT * FROM `users` WHERE `email` LIKE '$email' AND `password` LIKE '$lpassword'";

$res = $conn->query($sql);
//print_r($res->num_rows);
if ($res->num_rows > 0){
   print_r('Record found'); 
}
else{
    print_r('no Record found');  
    $signupsql = "INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES (NULL, 'shiyam', '$email', '$lpassword')";
    
if ($conn->query($signupsql) === TRUE) {
    print_r("signup sucessfully");
  } else {
    print("Error: " . $sql . "<br>" . $conn->error);
  }
}
}
  $conn->close();
?>


