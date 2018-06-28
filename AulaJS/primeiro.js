
		/* Exemplo de variaveis
		var nome = "Victor";
		var a = 30;

		alert(typeof nome);
		alert(typeof a)
		*/


		/* Exemplo de operadores
		var a = 10;
		var b = 100;
		var resultado = b/a;

		console.log(resultado);
		*/

		/* Concatenção
		var nome = "Victor";
		var numero = 20;

		console.log(nome + numero);
		*/

		/*
		var nome = prompt("Digite o seu nome: ");

		console.log(nome)
		*/

		/** Prompt
		var numeroA = prompt("Digite o primeiro numero");
		var numeroB = prompt("Digite o segundo numero");

		var resultado = Number(numeroA) - Number(numeroB);

		alert(resultado);
		**/


		/** Array
		var nomes = ["Victor", "Lima", "Leonan", "Rafel", "Erik"];
		var numeros = [0,2,3,9,10,200,300,500];
		var misto = ["Victor",2323,"Lima",2213,2323,"Rafael",2323,"Erik"]


		console.log(nomes[2]);
		console.log(nomes[3]);
		console.log(nomes.length);
		**/

		/** For
		for(var controle = 0; controle < 5;controle++){
			console.log("Isso é uma página web" + controle);
		}

		// For
		// Inicia
			// controle = 0
			// controle < 5
		// 1° repetição
			// Console.log
			// controle++
		// 2° vez
			// controle 1
			// Console.log
			// controle++
		// 3° Vez
			// controle 2
		// 4°
			// controle 3
		// 5°
			// controle 4
		// 6° 
			// controle 5
		**/

		/** While
		var numero = 0;

		while(numero < 10){
			console.log("Essa é a vez n " + numero)
			console.log("Oi tudo bem?");
			numero = numero + 1;
		}
		**/

		/**
		var numeroA = 60;
		var numeroB = 70;


		if(numeroA == numeroB){
			console.log("Numero A eh menor do que numero B");
			console.log("Se for verdadeiro, eu executo");
		}else{
			console.log("A é diferente de B");
			console.log("A condição é falsa");
		}
		**/


		/** Exemplo IF
		var senhaCorreta = "admin";
		var senhaDigitada = prompt("Digite uma senha: ");

		if(senhaDigitada == senhaCorreta){
			console.log("Você acertou a senha, pois a condição foi verdadeira");
			alert("Oba!, você logou no sistema");
		}else{
			alert("Você errou a senha, condição falsa");
		}
		**/

		/** Exercicio da idade
		var idade = prompt("Digite a sua idade");

		if(idade >= 18){
			alert("Você é maior de idade");
		}else{
			alert("Você é menor de idade");
		}
		**/

 		/** Primeiro exemplo
		function exibeFrase(){
			console.log("Oi isso é uma função");
			console.log("Eu posso colocar qualquer comando aqui dentro");
		}


		// Aqui
			exibeFrase();
			exibeFrase();
			exibeFrase();

		// Esse aqui
			console.log("Oi isso é uma função");
			console.log("Eu posso colocar qualquer comando aqui dentro");
			console.log("Oi isso é uma função");
			console.log("Eu posso colocar qualquer comando aqui dentro");
			console.log("Oi isso é uma função");
			console.log("Eu posso colocar qualquer comando aqui dentro");

	**/


	/**

	function exibeONomeDoUsuario(nome){
		console.log("Seu nome: " + nome);
	}

	exibeONomeDoUsuario("Victor Lima");
	exibeONomeDoUsuario("Leonan Luppi");
	exibeONomeDoUsuario("Rafael");

	**/


	/**
	function soma(a, b){
		console.log(a + b);
	}

	soma(10, 20);
	soma(20, 30);
	soma();
	**/

	/**
	function juntar(palavra1, palavra2){
		console.log(palavra1 + " " + palavra2);
	}

	juntar("Victor","Lima");
	juntar("A","B");
	juntar("School of", "Net");
	**/

	/**
	function calcularRaizQuadrada(numero){
		return numero**2;
	}

	var raizDeCinco = calcularRaizQuadrada(5);
	var raizDe10 = calcularRaizQuadrada(10);
	var raizde20 = calcularRaizQuadrada(20);

	console.log(raizDeCinco, raizDe10, raizde20);
	**/

	alert("Esse aqui é um arquivo separado!");