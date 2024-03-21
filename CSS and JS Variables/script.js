const inputs = document.querySelectorAll('.controls input');
console.log(inputs)


function handleUpdate(){
    console.log("in d", this.value);
    const suffix = this.dataset.sizing || '';
    console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(item => item.addEventListener('change', handleUpdate));
inputs.forEach(item => item.addEventListener('mousemove', handleUpdate));
