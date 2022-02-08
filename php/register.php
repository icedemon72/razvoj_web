<?php include('server.php') ?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Registration</title>
	<link rel="stylesheet" href="./style/style.css">
	<link rel="stylesheet" href="./style/bootstrap.min.css">
</head>

<body>
	<div class="container-fluid content_container">
		<div class="container">
			<div class=" text-center mt-5 ">
				<h1>Sign Up</h1>
			</div>

			<div class="row">
				<div class="col-lg-7 mx-auto sign_form">
					<div class="card mt-2 mx-auto p-4 contact_card">
						<div class="card-body contact_card">
							<div class="container">
								<form id="contact-form" method="post" action="register.php">
									<?php include('errors.php'); ?>
									<div class="controls">
										<div class="row">
										</div>
										<div class="row">
											<div class="col-md-12">
												<div class="form-group"> <label for="form_email">Username</label> <input id="form_username" type="text" name="username" class="form-control" required="required" data-error="Valid username is required." value="<?php echo $username; ?>"> </div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<div class="form-group"> <label for="form_email">Email</label> <input id="form_email" type="email" name="email" class="form-control" required="required" data-error="Valid email is required." value="<?php echo $email; ?>"> </div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<div class="form-group"> <label for="form_email">Password</label> <input id="form_password" type="password" name="password_1" class="form-control" required="required" data-error="Valid email is required."> </div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<div class="form-group"> <label for="form_email">Confirm Password</label> <input id="form_confirmpassword" type="password" name="password_2" class="form-control" required="required" data-error="Valid email is required."> </div>
											</div>
										</div>

										<div class="col-md-12"> <input type="submit" name="reg_user" class="btn btn-send pt-2 btn-block contact_btn" value="Sign up!">
										</div>

										<div class="row">
											<div class="col-md-12 sign_up_text">
												<p>Already have an account? <a href="./login.php">Click here to sign in!</a></p>
											</div>
										</div>

									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<script src="./scripts/bootstrap.bundle.min.js"></script>
</body>

</html>