
let ferverAgua = function () {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogo && fogoEstaAceso) {
            console.log('Começando o processo de ferver a água');
            
            resolve();
        } else {
            console.log('É necessário ligar a chaleira no fogo para ferver a água');
            
            reject();
        }
    });
};

let chaleiraEstaNoFogo = true;
let fogoEstaAceso = true;

let passarCafé = () => {
    console.log('Passando café');
};

ferverAgua(chaleiraEstaNoFogo, fogoEstaAceso).then(passarCafé)
console.log('Fazendo o café');

