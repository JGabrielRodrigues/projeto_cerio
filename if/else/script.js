let Idade = '';

if (isNaN(Idade)) {
    console.log("Idade inválida");
}
    else if (Idade < 0 || Idade > 130) {
    console.log("Idade não existe");
}   else if (Idade <= 8) {
    console.log("vc e de menor idade não pode se escrever");
} else if (Idade >= 18) {
    console.log("vc e de maior idade pode se escrever");
}else if (Idade >= 30) {
    console.log("vc e de idade avançada não pode se escrever");
}
