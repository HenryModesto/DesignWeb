const url = "https://go-wash-api.onrender.com/api/user"; 

async function cadastroUsuario() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpf_cnpj = document.getElementById('cpf').value; 
    let birthday = document.getElementById('birthday').value; 

    if (!name || !email || !password || !cpf_cnpj || birthday) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; 
    }

    let api = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "name": name,
            "email": email,
            "user_type_id": 1,
            "password": password,
            "cpf_cnpj": cpf_cnpj,
            "terms": 1,
            "birthday": birthday
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (api.ok) {
        let resposta = await api.json();
        console.log(resposta);
        alert(resposta.data); 
        window.location.href = "../view/login.html"

        return;
    } 
    let respostaErro = await api.json();

    if(respostaErro?.data?.errors?.cpf_cnpj){
        alert(respostaErro.data.errors.cpf_cnpj[0]);

    } else if(respostaErro.data.errors.email){
        alert(respostaErro.data.errors.email[0])

    } else if(respostaErro.data.errors.password) {
        alert(respostaErro.data.errors.password[0])
    }
    else {
        alert("Erro! Usuario já cadastrado ou dados inválidos.");
    }

}


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
    



