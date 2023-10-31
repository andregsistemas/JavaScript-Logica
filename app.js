alert('Boas vindas ao jogodo número secreto!');
let numeroSecreto = 4;
let chute = prompt('Escolha um número entre 1 e 30');

//se chute for igual ao número secreto
if(numeroSecreto == chute) {
    alert(`Isso ai vocẽ descobriu o número sercreto que é o ${numeroSecreto}`); //Template Strings
}else {
    alert('Que pena você errou o número!');
}
