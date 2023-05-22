document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        calcular();
      }
});

function calcular() {
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value

    const imc =  peso / altura ** 2
    let text = ""
    switch (true) {
        case imc < 18.5:
            text = "Você está magro"
            break
        case imc < 24.9:
            text = "Você está no peso ideal"
            break
        case imc < 29.9:
            text = "Você está com sobrepeso"
            break
        case imc < 39.9:
            text = "Você está com obesidade"
            break
        case imc > 39.9:
            text = "Você está com obesidade mórbida"
            break
    }
    document.getElementById('resultado').innerText=text

    document.getElementById('altura').value=""
    document.getElementById('peso').value=""

}