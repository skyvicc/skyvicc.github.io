<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html{
            background: linear-gradient(120deg, rgb(44, 44, 44), black, rgb(33, 33, 33))
        }
        .director-container{
            backdrop-filter: blur(40px);
            position: fixed;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: fit-content;
            height: fit-content;
            padding: 0.5rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        .director-container a{
            background-color: white;
            color: black;
            text-decoration: none;
            padding: 0.5rem 2rem;
            font-size: 1.5rem;
            border-radius: 25px;
            margin: 1rem 0.5rem;
            border: solid 1px black;
            transition: 250ms;
        }
        .director-container a:hover{
            filter: invert(100%);
        }
    </style>
</head>
<body>
    <main>
        <div class="director-container">
            <a href="rodos.html">Rodos</a>
            <a href="rodos.html">Rodos</a>
            <a href="rodos.html">Rodos</a>
            <a href="rodos.html">Rodos</a>
            <a href="rodos.html">Rodos</a>
            <a href="rodos.html">Rodos</a>
        </div>
        
    </main>
</body>
</html>
