const url = 'https://go-wash-api.onrender.com/api/auth/address'; 

async function cadastroEndereco() {
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value; 
    let complement = document.getElementById('complement').value; 
    let tokenUser = JSON.parse(localStorage.getItem("user")).access_token;

    if (!title || !cep || !address || !number) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; 
    }

    let api = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "title": title,
            "cep": cep,
            "address": address,
            "number": number,
            "complement": complement
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+tokenUser 
        }
    });

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta);
        alert("Endereço cadastrado com sucesso!");
        window.location.href =  "../view/home.html";
        return
    }
    let respostaErro = await api.json();
    console.log(respostaErro)
    alert("Tente novamente mais tarde")



    
    // if(respostaErro?.data?.errors?.title){
    //     alert(respostaErro.data.errors.title[0]);

    // } else if(respostaErro.data.errors.cep){
    //     alert(respostaErro.data.errors.cep[0])

    // } else if(respostaErro.data.errors.address) {
    //     alert(respostaErro.data.errors.address[0])
    // } else if(respostaErro.data.errors.number) {
    //     alert(respostaErro.data.errors.number)
    // } else if(respostaErro.data.errors.complement) {
    //     alert(respostaErro.data.errors.complement)
    // } else {
    //     alert('Dados inválidos')
    // }
}
