## Classes

### Porque precisamos de Classes?

Muitas vezes precisamos criar vários objetos do mesmo tipo, porém com atributos diferentes.

Exemplo um carro:

### Criar uma classe que vai ser o "blue print" (Carimbo) para criar varios objetos

Definir uma Classe

```jsx
//Definindo uma classe.
class Carro {

};

```

Instanciar uma Classe:

```jsx
//Instancioando uma Classe
const ka = new Carro();
const fox = new Carro();

console.log(ka);
console.log(fox);

console.log(typeof(ka));
console.log(typeof(fox));
```

Podemos adicionar Métodos.

```jsx
class Carro {
    ligar(){
        console.log("Vruuum");
    }
};

const civic = new Carro;
civic.ligar();
```

Podemos criar Múltiplos Métodos

```jsx
class Carro {
    ligar(){
        console.log("Vruuum");
    }
    mudarMarcha(){
        console.log("Marcha!")
    }
};
```

**OBS: Se tivermos multiples métodos não devemos colocar virgula entre eles.**

E claro, os métodos podem ter parâmetros:

```jsx
class Carro {
    ligar(){
        console.log("Vruuum");
    }
    mudarMarcha(marcha){
        console.log("Marcha: "+ marcha);
    }
};

const civic = new Carro;
civic.ligar();
civic.mudarMarcha(2);
```

### Definir as propriedades da instância de uma Classe

Se a gente logar as instancias da nossa classe, veremos que ela não tem nenhuma propriedade como modelo, cor, ano, etc.

```jsx
console.log(civic);
```

Vamos adicionar as propriedades usando uma função chamada Construtor. Essa função é chamada cada vez que um objeto dessa classe for criada.

```jsx
class Carro {
    constructor(){
        this.modelo = "ka";
        this.ano = 2020;
        this.cor = "prata";
    }

    ligar(){
        console.log("Vruuum");
    }
    mudarMarcha(marcha){
        console.log("Marcha: "+ marcha);
    }
};
```

Podemos tornar cada instancia de uma classe customizada:

```jsx
class Carro {
    constructor(modelo, ano, cor){
        this.rodas = 4;
        this.portas = 5;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    ligar(){
        console.log("Vruuum");
    }
    mudarMarcha(marcha){
        console.log("Marcha: "+ marcha);
    }
};
```

Podemos criar métodos para alterar as propriedades de uma instância:

- Podemos claro alterar uma propriedade de uma instancia depois que ela é criada:
    
    ```jsx
    corolla.cor = "prata";
    console.log(corolla);
    ```
    

Mas é uma boa prática definir um método que faça isso:

- Dessa forma, tudo é feito através de métodos.
- Outros devs podem facilmente olhar a definição de uma classe e determinar o que podem/gostariam de fazer com aquela classe.

```jsx
class Carro {
    constructor(modelo, ano, cor){
        this.rodas = 4;
        this.portas = 5;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    ligar(){
        console.log("Vruuum");
    }
    mudarMarcha(marcha){
        console.log("Marcha: "+ marcha);
    }
    definirCor(novaCor){
        this.cor = novaCor
    }
};
```

```jsx
corolla.definirCor("branco");
console.log(corolla);
```

### Herança

Podemos fazer uma classe Herdar alguns atributos de uma outra classe "Pai";

```jsx
class Caminhonete extends Carro {

};

const amarok = new Caminhonete("Amarok", 2019, "Cinza");
console.log(amarok);
```

Com isso, a gente pode agora definir novas funcionalidades específicas:

```jsx
class Caminhonete extends Carro {
    abrirCacamba(){
        console.log("Caçamba Aberta!!!");
    }
};

const amarok = new Caminhonete("Amarok", 2019, "Cinza");
console.log(amarok);

amarok.abrirCacamba();
civic.abrirCacamba();
```

Podemos também sobrescrever funcionalidades que já foram herdadas.

```jsx
class Caminhonete extends Carro {
    abrirCacamba(){
        console.log("Caçamba Aberta!!!");
    }
    ligar (){
        console.log("VRRRRRRRUUUUUMMMMM")
    }
};
```

```jsx
amarok.ligar();
civic.ligar();
```

Podemos também referenciar métodos da Classe Pai e extender sua funcionalidade original

```jsx
class Caminhonete extends Carro {
    abrirCacamba(){
        console.log("Caçamba Aberta!!!");
    }
    ligar (){
        console.log("VRRRRRRRUUUUUMMMMM")
    }
    andar(){
        super.mudarMarcha(1);
        this.ligar();
    }
};
```

```jsx
amarok.andar();
```

Isso é ainda mais útil no construtor:

```jsx
class Caminhonete extends Carro {
    constructor(modelo, ano, cor){
        super(modelo,ano,cor);
        this.capacidade = 500;
    }
    abrirCacamba(){
        console.log("Caçamba Aberta!!!");
    }
    ligar (){
        console.log("VRRRRRRRUUUUUMMMMM")
    }
    andar(){
        super.mudarMarcha(1);
        this.ligar();
    }
};
```

### Criar propriedades Estáticas para uma Classe

As vezes, você pode querer definir alguma propriedade que pertençam à classe como todo, não apenas uma instancia dela. Isso permite que a gente limite de alguma maneira o que uma classe pode ou não fazer.

```jsx
class Carro {
    constructor(modelo, ano, cor){
        this.rodas = 4;
        this.portas = 5;
        this.modelo = modelo;
        this.ano = ano;
        this.color = cor
    }

    static definirCor(){
        return ["Preto", "Branco", "Cinza", "Prata"]
    }

    ligar(){
        console.log("Vruuum");
    }
    mudarMarcha(marcha){
        console.log("Marcha: "+ marcha);
    }
    definirCor(novaCor){
        this.cor = novaCor
    }
};

const fusion = new Carro("Fusion", 2022, Carro.definirCor()[0]);
```

### Criar uma Fábrica

```jsx
class Veiculo {
    constructor(numeroDeSerie){
        this.numeroDeSerie = numeroDeSerie;
    }
    ligar(){
        console.log("Vruum")
    }
}

const fabrica = {
    carros: [],
    criarCarro(){
        const novoCarro = new Veiculo(this.carros.length);
        this.carros.push(novoCarro);
        return novoCarro;
    },
    encontrarCarro(index){
        return this.carros[index];
    }
}

fabrica.criarCarro();
fabrica.criarCarro();
console.log(fabrica);
console.log(fabrica.encontrarCarro(0));
```

Uma Fábrica também pode ser a Instância de uma Classe

```jsx
//CONSTRUÇÃO DE UMA FÁBRICA

class Veiculo {
    constructor(numeroDeSerie, fabricante, modelo){
        this.facricante = fabricante;
        this.numeroDeSerie = numeroDeSerie;
        this.modelo = modelo;
    }
    ligar(){
        console.log("Vruum")
    }
}

class Fabrica  {
    constructor(marca){
        this.marca = marca;
        this.carros = [];
    }
    criarCarro(modelo){
        const novoCarro = new Veiculo(this.carros.length, this.marca, modelo);
        this.carros.push(novoCarro);
        return novoCarro;
    }
    encontrarCarro(index){
        return this.carros[index]
    }
}

const toyota = new Fabrica("Toyota");
const bmw = new Fabrica("BMW");

toyota.criarCarro("Corolla");
console.log(toyota.encontrarCarro(0));

bmw.criarCarro("320i");
console.log(bmw.encontrarCarro(0));
```
