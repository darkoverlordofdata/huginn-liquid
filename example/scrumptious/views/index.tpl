<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="Scrumptious" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://scrumpit.herokuapp.com" />
    <meta property="og:image" content="https://scrumpit.herokuapp.com/images/scrumptious_logo_large.png" />
    <meta property="og:site_name" content="Scrumptious" />
    <meta property="og:description" content="Scrumptious app" />
    <meta property="fb:app_id" content="314522715291696" />

    <title>Scrumptious</title>
    <link rel="stylesheet"  href="css/jquery.mobile-1.2.0.css" />
    <link rel="stylesheet"  href="css/base.css" />
    <script src="js/jquery.js"></script>
    <script src="js/jquery.mobile-1.2.0.js"></script>
    <script src="js/mustache.js"></script>

</head>
<body>
<!-- Facebook JavaScript -->
<div id="fb-root"></div>


<!-- Login page -->
<div data-role="page" id="login" class="type-home">
    <div data-role="content">
        <div id="login-header">
            <img src="images/scrumptious_logo.png" alt="Scrumptious" /><span class="tagline">Scrumptious</span>
        </div>
        <div id="login-intro">
            <p class="intro">To get started, login using Facebook</p></div>
    </div>
    <div class="login-button">
        <a href="{{ loginUrl }}"><img src="images/fblogin.png"></img></a>

    </div>
</div>


  </body>
</html>