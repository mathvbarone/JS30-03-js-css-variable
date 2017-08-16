//VARIÁVEL DOS INPUTS
const inputs = document.querySelectorAll('.controls input');


//FUNÇÃO QUE MUDA A VARIAVEL CSS
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


//CALLBACK
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));