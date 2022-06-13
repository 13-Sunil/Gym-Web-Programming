
<?php
    $firstname = $_POST['fname'];
    $lastname = $_POST['lname'];
    $email = $_POST['email'];
    $password = $_POST['pass'];
    $cpassword = $_POST['cpass'];

    $conn = mysqli_connect('localhost','sunil','boss','Gym');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("INSERT INTO userdata(FirstName, LastName, Email, Pass, CPass) values(?,?,?,?,?)");
        $stmt->bind_param("sssss",$firstname, $lastname, $email, $password, $cpassword);
        $stmt->execute();
        echo "Registration Successfully";
        $stmt->close();
        $conn->close();
    }
?>