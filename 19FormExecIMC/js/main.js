function calcularIMC() {
  const form = document.querySelector('.form');
  const showme = document.querySelector('.showme');

  function recebeEventForm(event) {
    event.preventDefault();

    const peso = form.querySelector('.peso').value;
    const altura = form.querySelector('.altura').value;

    if (!peso || !altura) {
      showme.innerHTML = `<p class="js-result"><strong>Preencha os dois campos!</strong></p>`;
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    showme.innerHTML = `<p class="js-result">Seu IMC é <strong>${imc}</strong></p>`;
  }

  form.addEventListener('submit', recebeEventForm);
}
calcularIMC();