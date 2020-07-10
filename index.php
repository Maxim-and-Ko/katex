<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="source/css/fonts.css">
    <link rel="stylesheet" href="source/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="source/css/main.css">
</head>

<? require_once("source/pages/main/header.php"); ?>

<div id="load_zone"></div>

<? require_once("source/pages/main/footer.php"); ?>

<script> 
    const $ = (id) => document.getElementById(id) 
</script>

<script src="source/js/perehod.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="source/bootstrap/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/41ec05d543.js" crossorigin="anonymous"></script>
<script src="source/js/anim_btn.js"></script>
<script src="source/js/progress_bar.js"></script>
<script>
        function ViewMobileMenu () 
        {
            var menu = document.getElementById("mm").classList;

            if (menu.contains("nonvisible")) 
            {
                menu.remove("nonvisible");
            } 
            else 
            {
                menu.add("nonvisible");
            }

            var menuicon = document.getElementById("menu-icon-folder").classList;

            if (menuicon.contains("closed")) 
            {
                menuicon.remove("closed");
            } 
            else 
            {
                menuicon.add("closed");
            }

        }
    </script>
