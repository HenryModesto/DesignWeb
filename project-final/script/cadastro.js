const url = "https://go-wash-api.onrender.com/api/user"; 

async function cadastroUsuario() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpf_cnpj = document.getElementById('cpf').value; 
    let birthday = document.getElementById('birthday').value; 




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
        alert("Usuário cadastrado com sucesso."); 

        return;
    } 
    let respostaErro = await api.json();

    if(respostaErro?.data?.errors?.cpf_cnpj){
        alert(respostaErro.data.errors.cpf_cnpj[0]);

    }
    else {
        alert("Erro desconhecido ao tentar cadastrar o usuário.");
    }
}


    



