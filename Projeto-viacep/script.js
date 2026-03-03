function buscarCep() {
    const cep = document.getElementById("cep").value;
    const resultado = document.getElementById("resultado");
 
    // Validação simples
    if (cep.length !== 8 || isNaN(cep)) {
      resultado.innerHTML = "<p class='erro'>Digite um CEP válido com 8 números.</p>";
      return;
    }
 
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(dados => {
 
        if (dados.erro) {
          resultado.innerHTML = "<p class='erro'>CEP não encontrado.</p>";
          return;
        }
 
        resultado.innerHTML = `
          <p><strong>CEP:</strong> ${dados.cep}</p>
          <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
          <p><strong>Bairro:</strong> ${dados.bairro}</p>
          <p><strong>Cidade:</strong> ${dados.localidade}</p>
          <p><strong>Estado:</strong> ${dados.uf}</p>
          <p><strong>DDD:</strong> ${dados.ddd}</p>
        `;
      })
      .catch(error => {
        resultado.innerHTML = "<p class='erro'>Erro ao buscar o CEP.</p>";
        console.log("Erro:", error);
      });
  }
 
  function limpar() {
    document.getElementById("cep").value = "";
    document.getElementById("resultado").innerHTML = "";
  }