const urlEndereco = 'https://go-wash-api.onrender.com/api/auth/address'; 

async function cadastroEndereco() {
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let adress = document.getElementById('adress').value;
    let number = document.getElementById('number').value; 
    let complement = document.getElementById('complement').value; 

    if (!title || !cep || !adress || !number) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; 
    }

    let api = await fetch(urlEndereco, {
        method: "POST",
        body: JSON.stringify({
            "title": title,
            "cep": cep,
            "adress": adress,
            "number": number,
            "complement": complement
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY' 
        }
    });

    if (api.ok) {
        let resposta = await api.json();
        console.log(resposta);
        alert('Endereço cadastrado com sucesso!');
        window.location.href =  "../view/home.html";
    }
    let respostaErro = await api.json();

    if(respostaErro?.data?.errors?.title){
        alert(respostaErro.data.errors.title[0]);

    } else if(respostaErro.data.errors.cep){
        alert(respostaErro.data.errors.cep[0])

    } else if(respostaErro.data.errors.adress) {
        alert(respostaErro.data.errors.adress[0])
    } else if(respostaErro.data.errors.number) {
        alert(respostaErro.data.errors.number)
    } else if(respostaErro.data.errors.complement) {
        alert(respostaErro.data.errors.complement)
    } else {
        alert('Dados inválidos')
    }
}
