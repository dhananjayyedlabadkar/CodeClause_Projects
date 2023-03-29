
<!-- Payment Form -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Payment Form</title>
</head>
<body>
    <form action="pay.php" method="post">
		<h1>Total Amount : 999.00</h1><input type="hidden" name="price" value="999.00">

		<label for="name">Name</label>
		<input type="text" name="customername">

		<label for="email">Email</label>
		<input type="email" name="email">

		<label for="contactno">Contact No.</label>
	    <input type="text" name="contactno">

		 <input type="submit" name="submit" value="Proceed to Pay">
	</form>
</body>
</html>




























