(markupData, pageData) => (
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Source+Code+Pro:600" rel="stylesheet" />
  <link rel="stylesheet" href="style/style.css"/>
  <title>{ markupData.name } - Contact</title>
  <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
  <script type="text/javascript" src="assets/email.js"></script>
</head>
<body className="contact">
  <button id="submit-btn">submit</button>
</body>
</html>
)