primeiro quero que faca com que o meu site esteja configurado com o firebase e puxe os dados 
dos usuario mas isso vai ser usado para logar e visualizar as plataformas e o login que o usuario possui e o preço que o usuario paga por mes apenas isso faca o siet bem organizado e arrumado e tambem o suauri e senha são os nomes do usuario exeplo :

Usuario: Joao
Senha : Joao

no meu firebase em firestore database 

tem o credential e plataforms e users 

dentro deles tem um id e cada informacao das plataformas e senhas das plataformas e usuario que esta assinamdo 

const firebaseConfig = {
    apiKey: "AIzaSyAxsMoWk7sh9UHzlRquhhU3BoG4D7AMckU",
    authDomain: "progamador-jp.firebaseapp.com",
    projectId: "progamador-jp",
    storageBucket: "progamador-jp.appspot.com",
    messagingSenderId: "409006186944",
    appId: "1:409006186944:web:1d28dc1c0df63c12342825",
    measurementId: "G-MCCQYJLDT0"
};


meu html:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Empresarial</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="login-container">
        <form id="loginForm">
            <h2>Área Restrita</h2>
            <label for="username">Nome de Usuário:</label>
            <input type="text" id="username" required>
            <label for="password">Senha:</label>
            <input type="password" id="password" required>
            <button type="submit">Login</button>
        </form>
    </div>

    <div id="user-info" style="display: none;">
        <h1>Bem-vindo, <span id="displayName"></span>!</h1>
        <p>Plano: <span id="userPlan"></span>R$</p>
        <h3>Plataformas Assinadas</h3>
        <ul id="platformList"></ul>
    </div>

    <!-- Firebase App (SDK) -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js"></script>
    <script src="./script.js"></script>
</body>
</html>
