//Pegar os dados do formulario
const fname = document.getElementById("fname");
const adress = document.getElementById("adress");
const email = document.getElementById("email");
const phone = document.getElementById("numero");
//Para ouvir o clique do botão, usamos o addEventListener
const btnSubmit = document.getElementById("btn");

const data = [];

btnSubmit.addEventListener('click', function (event) {
    //Não deixa o formulario se comportar como padrão, ou seja, enviar dados para proxima página/requisição
    event.preventDefault();

    const pessoa = {
        nome: fname.value,
        endereco: adress.value,
        email: email.value,
        telefone: numero.value,

        favoritos: [
            {
                titulo: "A nova casa",
                autor: "Juca bala",
                ano: 2025,
                genero: "Aventura"
            }
        ]
    };


    data.push(pessoa);
    console.log(pessoa.favoritos);
    console.log(data);
});