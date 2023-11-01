alert('Boas vindas ao jogodo número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute = null;
let tentativas = 1;

// Enquanto chute não for iguaç ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    //se chute for igual ao número secreto
    if(chute == numeroSecreto) {
        break;
        
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Vocẽ descobriu o número sercreto que é o ${numeroSecreto} usando ${tentativas} ${palavraTentativa}`); //Template Strings

/*
if(tentativas > 1){
    alert(`Isso ai vocẽ descobriu o número sercreto que é o ${numeroSecreto} usando ${tentativas} tentativas!`); //Template Strings
}else{
    alert(`Isso ai vocẽ descobriu o número sercreto que é o ${numeroSecreto} com apenas ${tentativas} tentativa!`); //Template Strings
}
*/
