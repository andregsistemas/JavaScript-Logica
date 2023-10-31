alert('Boas vindas ao jogodo número secreto!');
let numeroSecreto = 5;
let chute = null;
let tentativas = 1;

// Enquanto chute não for iguaç ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
    //se chute for igual ao número secreto
    if(chute == numeroSecreto) {
        alert(`Isso ai vocẽ descobriu o número sercreto que é o ${numeroSecreto} com ${tentativas} tentativas`); //Template Strings
    }else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++
    }
}