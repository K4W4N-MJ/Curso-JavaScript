function meuEscopo() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const pessoas = []

    function recebeEventForm(event) {
        event.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)

        result.innerHTML = `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p></br>`
        

    }
    form.addEventListener('submit', recebeEventForm)
}
meuEscopo();