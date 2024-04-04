import paoMel from "./pao-mel.jpg";
import React, { useState } from "react"; // chamando hook usestate
import paoDiferente from "./pao-diferente.jpeg";
import boloPaoDeMel from "./bolo-1.jpg";
import paoColorido from "./pao-coloridos.png";
import maisIcon from "./mais.png";
import menosIcon from "./menos.png";
import lixeiraIcon from "./lixeira.png";

function ItemCard({ imagem, preco }) {
  const [numero, setNumero] = useState(0);

  const Acrescentar = () => {
    setTimeout(() => {
      setNumero(numero + 1);
    }, 1000);
  };

  const Reduzir = () => {
    setTimeout(() => {
      if (numero > 0) {
        setNumero(numero - 1);
      }
    }, 1000);
  };

  const Limpar = () => {
    setNumero(0);
  };

  return (
    <div className="card">
      <img className="img-card" src={imagem} alt="pao-de-mel" />
      <h3>{preco}</h3>
      <div className="icons-card">
        <img onClick={Acrescentar} src={maisIcon} alt="icon-sinal-mais" />
        <h2>{numero}</h2>
        <img onClick={Reduzir} src={menosIcon} alt="icon-sinal-menos" />
        <img onClick={Limpar} src={lixeiraIcon} alt="icon-lixeira" />
      </div>
      <button class="buttonClass" onClick={""}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

function Main() {
  return (
    <main>
      <ItemCard imagem={paoMel} preco="R$13,00 kg" />
      <ItemCard imagem={paoDiferente} preco="R$15,00 kg" />
      <ItemCard imagem={boloPaoDeMel} preco="R$32,00 kg" />
      <ItemCard imagem={paoColorido} preco="R$18,00 kg" />
    </main>
  );
}

export default Main;
