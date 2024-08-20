// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAxsMoWk7sh9UHzlRquhhU3BoG4D7AMckU",
    authDomain: "progamador-jp.firebaseapp.com",
    projectId: "progamador-jp",
    storageBucket: "progamador-jp.appspot.com",
    messagingSenderId: "409006186944",
    appId: "1:409006186944:web:1d28dc1c0df63c12342825",
    measurementId: "G-MCCQYJLDT0"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const planos = {
    "Crunchyroll": "1zq8gDxittdoA6UtLU32",
    "PrimeVideo": "URykK28HwfIBG8RXFauw",
    "Star e Disney": "nN1x2ZSNmQ61PUc6iem4",
    "Max": "yMgAnPg9heXwtM2QrR3a"
};

async function buscarDadosFirebase(username) {
    const querySnapshot = await db.collection('users').where('username', '==', username).get();

    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    } else {
        throw new Error('Usuário não encontrado no Firebase');
    }
}


async function buscarCredenciais(id) {
    try {
        const doc = await db.collection('credentials').doc(id).get();
        if (doc.exists) {
            return doc.data(); 
        } else {
            throw new Error('Credenciais não encontradas para o ID fornecido');
        }
    } catch (error) {
        console.error('Erro ao buscar credenciais:', error);
        throw error;
    }
}

// Função de Login
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const dadosUsuario = await buscarDadosFirebase(username);

        if (username === dadosUsuario.username && password === dadosUsuario.username) { 

            document.getElementById('login-container').style.display = 'none';
            document.getElementById('user-info').style.display = 'block';

            document.getElementById('displayName').textContent = username;
            document.getElementById('userPlan').textContent = dadosUsuario.amount;

            const platforms = dadosUsuario.platform;
            const platformList = document.getElementById('platformList');
            platformList.innerHTML = '';

            for (const platform of platforms) {
                const li = document.createElement('li');
                
                if (planos[platform]) { 
                    const credenciais = await buscarCredenciais(planos[platform]);
                    li.innerHTML = `
                        <div class="platform-name">${platform}</div>
                        <div class="credentials">
                            <div>
                                <span class="label">Email:</span>
                                <span>${credenciais.email}</span>
                            </div>
                            <div>
                                <span class="label">Senha:</span>
                                <span>${credenciais.senha}</span>
                            </div>
                        </div>
                    `;
                } else {
                    li.textContent = `Plataforma: ${platform} - Usuario e senha são pessoal.`;
                }
                
                platformList.appendChild(li);
            }

        } else {
            alert('Nome de usuário ou senha incorretos!');
        }
    } catch (error) {
        console.error('Erro durante o login:', error);
        alert('Erro ao processar o login. Tente novamente.');
    }
});
