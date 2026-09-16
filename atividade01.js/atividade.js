const nomeItem = "Espada das Sombras";
const precoItem = 250;
const raridadeItem = "Raro";
let quantidadeEstoque = 12;

console.log(`O item se chama ${nomeItem}.`);
console.log(`Ele custa ${precoItem} moedas.`);
console.log(`Sua raridade é ${raridadeItem}.`);
console.log(`Há ${quantidadeEstoque} unidades em estoque.`);

if (precoItem >= 0) {
  console.log("Preço válido.");
} else {
  console.log("Erro: preço inválido.");
}

if (precoItem < 100) {
  console.log("Comum");
} else if (precoItem >= 100 && precoItem < 500) {
  console.log("Raro");
} else {
  console.log("Lendária");
}

// Simplificado: a expressão já retorna o valor booleano
const emDestaque = precoItem > 500; 
console.log(`Item em destaque? ${emDestaque}`);

if (quantidadeEstoque > 0 && precoItem > 0) {
  console.log("Item disponível!");
}