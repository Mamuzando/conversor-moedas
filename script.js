function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const moedaOrigem = document.getElementById("moedaOrigem").value;
  const moedaDestino = document.getElementById("moedaDestino").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.innerText = "Digite um valor válido!";
    return;
  }

  if (moedaOrigem === moedaDestino) {
    resultado.innerText = `Resultado: ${valor.toFixed(2)} ${moedaDestino}`;
    return;
  }

  // Taxas fixas (você pode atualizar depois)
  const taxas = {
    "USD": 5.89, // 1 USD = 5.20 BRL
    "EUR": 6.71  // 1 EUR = 5.60 BRL
  };

  let valorConvertido = 0;

  // Conversão para Real
  if (moedaDestino === "BRL") {
    valorConvertido = valor * taxas[moedaOrigem];
  }
  // Conversão de Real para outra moeda
  else if (moedaOrigem === "BRL") {
    valorConvertido = valor / taxas[moedaDestino];
  }
  // Conversão entre moedas que não são BRL
  else {
    const valorEmBRL = valor * taxas[moedaOrigem]; // Primeiro pra real
    valorConvertido = valorEmBRL / taxas[moedaDestino]; // Depois pra destino
  }

  resultado.innerText = `Resultado: ${valorConvertido.toFixed(2)} ${moedaDestino}`;
}
