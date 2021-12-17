console.log("Vamos falar de Classes!")

//Retomada Objetos
var imovel = {
    tipo: "apartamento",
    valorAluguel: 2000,
    valorVenda: 250000,

    agendarVisita(data){
        console.log("Visita agendada para " + data);
    }
}

console.log(imovel);
console.log(imovel.valorAluguel);

imovel.agendarVisita("amanhã");


//Classes
//São como se fossem moldes para criar outros objetos semelhantes com mais facilidade.

//Definir uma Classe
class Carro{
    constructor(modelo, cor, fabricante, acessorios){
        this.rodas = 4;
        this.ano = 2021;
        this.modelo = modelo;
        this.pintura = cor;
        this.marca = fabricante;
        this.pacoteAcessorios = acessorios;
    }

    static definirAcessorios(){
        return ["Basico", "Confort", "Advanced", "Premium"]
    }

    //definindo um método dentro de uma classe
    ligar(){
        let ligado = true;
        console.log("O status de Ligado é: " + ligado);
    }
    pintar(novaCor, novaCorTeto){
        this.pintura = novaCor;
    }
    enplacar(numPlaca){
        this.placa = numPlaca
    }
};

// var ka = new Carro();
// var fox = new Carro();

// console.log(ka, "Ka");
// console.log(fox, "Fox");

// console.log(typeof(ka));
// console.log(typeof(fox));

// console.log(ka.rodas);
// console.log(fox.rodas);

//Instanciando um objeto da classe carro;
var civic = new Carro("Civic", "Preto");
console.log(civic);

var ka = new Carro ("Ka", "Branco");
console.log(ka);

//Adicionando uma nova propriedade à uma instância da classe Carro;
ka.placa = "KKK-1234";
console.log(ka);

//Alterando uma propriedade existente de uma instancia da classe CArro;
civic.rodas = 3;
console.log(civic);

civic.pintar("Cinza");
console.log(civic);
civic.pintar("Vermelho");
console.log(civic);
civic.pintar("Verde");
console.log(civic);
console.log(ka);

civic.enplacar("FFF-8900")
console.log(civic);

var uno = new Carro("Uno", "Prata");
console.log(uno);

uno.enplacar("ASD-1234");
console.log(uno);

var herbie = new Carro("Fusca", "Vermelho");
console.log(herbie);


herbie.pintar("Braco")
console.log(herbie);

//HERANÇAAA
//Pode criar uma Subclasse, que vai Herdar as propriedades e atributos da Classe Pai.

class Caminhonete extends Carro{
    constructor(modelo, cor, fabricante){
        super(modelo, cor, fabricante);
        this.tracao = "4x4"; 
    }
    
    //Classe caminhonete herdou todos os atributos da classe Carro.
    abrirCacamba(){
        console.log("Caçamba Aberta!");
    }
    andar(){
        super.ligar();
        let marcha = 1;
        console.log("E engatei a " + marcha);
    }
}

var amarok = new Caminhonete("Amarok", "Marrom", "VW");
console.log(amarok);
amarok.abrirCacamba();

amarok.andar();


var fit = new Carro("Fit", "Preto", "Honda", Carro.definirAcessorios()[0]);
console.log(fit);










