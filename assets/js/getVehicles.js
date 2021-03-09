

fetch('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1')
  .then(resposta => {
    // valida se a requisição falhou
    if (!resposta.ok) {
      return new Error('falhou a requisição') // cairá no catch da promise
    }

    // verificando pelo status
    if (resposta.status === 404) {
      return new Error('não encontrou qualquer resultado')
    }

    // retorna uma promise com os dados em JSON

    return resposta.json();


  })

  .then(data => {

    let botaoBusca = document.getElementById("myBtn");

    botaoBusca.addEventListener("click", function () {

      let marcaVeiculo = document.getElementById("marca").value;
      let modeloVeiculo = document.getElementById("modelo").value;
      let precoVeiculo = document.getElementById("faixa-preco").value;
      let anoVeiculo = document.getElementById("ano").value;
      let versaoVeiculo = document.getElementById("versao").value;
      let raioVeiculo = document.getElementById("raio").value;
      let cbNovos = document.getElementById("cbNovos").value;
      let cbUsados = document.getElementById("cbUsados").value;
      console.log(cbNovos, cbUsados)

      const html = data.map(veiculo => {
        if (veiculo.Make === marcaVeiculo) {
          return template(veiculo.ID, veiculo.Make, veiculo.Model, veiculo.Version, veiculo.Color, veiculo.KM, veiculo.Price, veiculo.YearFab, veiculo.YearModel);

        } else if (veiculo.Model === modeloVeiculo) {

          return template(veiculo.ID, veiculo.Make, veiculo.Model, veiculo.Version, veiculo.Color, veiculo.KM, veiculo.Price, veiculo.YearFab, veiculo.YearModel);

        } else if (veiculo.Version === versaoVeiculo) {

          return template(veiculo.ID, veiculo.Make, veiculo.Model, veiculo.Version, veiculo.Color, veiculo.KM, veiculo.Price, veiculo.YearFab, veiculo.YearModel);

        } else if (veiculo.Price === precoVeiculo) {

          return template(veiculo.ID, veiculo.Make, veiculo.Model, veiculo.Version, veiculo.Color, veiculo.KM, veiculo.Price, veiculo.YearFab, veiculo.YearModel);

        } else if (veiculo.YearModel === anoVeiculo) {

          return template(veiculo.ID, veiculo.Make, veiculo.Model, veiculo.Version, veiculo.Color, veiculo.KM, veiculo.Price, veiculo.YearFab, veiculo.YearModel);

        } else if (veiculo.KM === raioVeiculo) {

          return template(veiculo.ID, veiculo.Make, veiculo.Model, veiculo.Version, veiculo.Color, veiculo.KM, veiculo.Price, veiculo.YearFab, veiculo.YearModel);

        } else if (document.getElementById("cbNovos").checked === true) {
          document.getElementById("cbUsados").checked = false;
          raioVeiculo = 0;
          raioVeiculo.value = 0;
          return template(veiculo.ID, veiculo.Make, veiculo.Model, veiculo.Version, veiculo.Color, veiculo.KM, veiculo.Price, veiculo.YearFab, veiculo.YearModel);
        } else if (document.getElementById("cbUsados").checked === true) {
          document.getElementById("cbNovos").checked = false;
          return template(veiculo.ID, veiculo.Make, veiculo.Model, veiculo.Version, veiculo.Color, veiculo.KM, veiculo.Price, veiculo.YearFab, veiculo.YearModel);

          
        }
      })

        .join("")

      document.querySelector(".modal-content").insertAdjacentHTML("afterbegin", html);
      // ID, Make, Model, Version, Color, Image, KM, Price, Version, YearFab, YearModel
      // 

    });

  });



function limpaFiltro() {
  // let regiao = document.getElementById("regiao").value = "";
  let marcaVeiculo = document.getElementById("marca").value = "Todos";
  let modeloVeiculo = document.getElementById("modelo").value = "Todos";
  let precoVeiculo = document.getElementById("faixa-preco").value = "0,00";
  let anoVeiculo = document.getElementById("ano").value = "Todos";
  let versaoVeiculo = document.getElementById("versao").value = "Todos";
  let raioVeiculo = document.getElementById("raio").value = "Todos";
}


function template(id, make, model, version, color, km, price, yearfab, yearmodel) {
  return `
    <div class="box"  style="background-color:green;">
    <p>ID: ${id}</p>
    </div>
    <div class="box">
    <p>MARCA: ${make}</p>
    </div>
    <div class="box">
    <p>MODELO: ${model}</p>
    </div>
    <div class="box">
    <p>VERSÃO: ${version}</p>
    </div>
    <div class="box">
    <p>COR: ${color}</p>
    </div>
    <div class="box">
    <p>QUILOMETRAGEM: ${km}</p>
    </div>
    <div class="box">
    <p>PREÇO: ${price}</p>
    </div>
    <div class="box">
    <p>ANO FABRICAÇÃO: ${yearfab}</p>
    </div>
    <div class="box">
    <p>ANO MODELO: ${yearmodel}</p>
    </div>
    <br>
     `;
}

