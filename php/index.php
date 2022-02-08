<?php 
  session_start(); 

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: login.php");
  }
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Logged in!</title>
	<link rel="stylesheet" type="text/css" href="./style/style.css">
	<link rel="stylesheet" href="./style/bootstrap.min.css">
</head>
<body>
	<div class="content">
		<?php if (isset($_SESSION['success'])) : ?>
		<div class="error success" >
			<h3>
			<?php 
				echo $_SESSION['success']; 
				unset($_SESSION['success']);
			?>
			</h3>
		</div>
		<?php endif ?>

		<!-- logged in user information -->
		<?php  if (isset($_SESSION['username'])) : ?>
			<div class="container">
				<div class="row d-flex justify-content-center">
					<p>Welcome <span class="bold"><?php echo $_SESSION['username']; ?></span>!</p>
				</div>
				<div class="row d-flex justify-content-center">
					<a href="index.php?logout='1'" class="btn contact_btn">Logout</a>
				</div>
			</div>
		<?php endif ?>
	</div>
		<script src="./scripts/bootstrap.bundle.min.js"></script>
</body>
</html>