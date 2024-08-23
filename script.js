function buscaCachorro() {
    let racaNome = document.querySelector('#racaNome').value.toLowerCase();
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(dados => {
        if (dados.message[racaNome]) {
            fetch(`https://dog.ceo/api/breed/${racaNome}/images/random`)
            .then(response => response.json())
            .then(dados => {
                document.querySelector('#nomeCachorro').innerHTML = "Raça: " + racaNome.charAt(0).toUpperCase() + racaNome.slice(1);
                document.querySelector('#imgCachorro').src = dados.message;
            })
            .catch(error => console.log(error));
        } else {
            alert('Raça não encontrada');
        }
    })
    .catch(error => console.log(error));
}
