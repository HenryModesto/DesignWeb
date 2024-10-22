const urlLogin = "https://go-wash-api.onrender.com/api/login"; 

async function loginUsuario() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!title || !cep || !address || !number) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; 
    }

    let api = await fetch(urlLogin, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "user_type_id": 1,
            "password": password,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(api.ok) {
        let resposta = await api.json();
        console.log(resposta)
        localStorage.setItem("user", JSON.stringify(resposta))
        alert("Login realizado com sucesso!")
        window.location.href = "../view/home.html"  

        return;
    }

    let respostaErro = await api.json();
    if(respostaErro.data.errors.password)
        alert(respostaErro.data.errors.password[0]);

    if(!respostaErro.data.errors.password && respostaErro)
        alert(respostaErro.data.errors);
    
    
}

//loginUsuario()
function cadastroEndereco() {
    let user = JSON.parse(localStorage.getItem("user"));
   // console.log(user.access_token)
}

cadastroEndereco()

function mostrarSenha() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '👁️'; 
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '👁️‍🗨️'; 
    }
}
