import React, { useState } from "react";

function Footer() {
  //setTimeout é um método que executa um bloco de codigo, depois de um determinado tempo, estrutura setTimeout {() =>{}, tempo}
  const Desconto = () => {
    setTimeout(() => {
      alert("Desconto de 10% na primeira compra acima de R$ 50,00");
    }, 100);
  };

  // const [numero, setNumero] = useState(0); //contador

  // const Acrescentar = () => {
  //   setTimeout(() => {
  //     setNumero(numero + 1);
  //   }, 1000);

  // // const Reduzir = () => {
  // //   setTimeout(() => {
  // //     setNumero(numero - 1);
  // //   }, 1000);
  // };

  // setinterval executa um bloco de 2 em 2 segundo faça isso
  //setInterva(() =>{},repetidamente)
  // const [start, setStart] = useState(0);
  // const [stop, setStop] = useState(); // esta vazio pois nao sei qual valor vai guardar.

  // const Iniciar = () => {
  //   const guardarIntervalor = setInterval(() => {
  //     setStart((start) => start + 1); // arrow function para armazenar o valor atualizado
  //   }, 1000);

  //   setStop(guardarIntervalor);
  // };

  // //funçao para parar o setInterval, sendo ativada no botão de Parar
  // const PararCronometro = () => clearInterval(stop);

  // // zerar o cronômetro
  // const ZerarCronometro = () => {
  //   setStart(0); //define o valor de start para zero
  //   clearInterval(stop); // para o cronômetro
  // };

  return (
    <footer>
      <section>
        {/* <h3>Click no botão e adicione seu desconto</h3>
        <button onClick={Desconto}>Desconto </button> */}
      </section>

      {/* <section>
        <h3>Contador com SetTimeout</h3>
        <h3>{numero}</h3>
        <button onClick={Acrescentar}>+</button>
        <button onClick={Reduzir}>-</button>
      </section> */}

      {/* <section>
        <h3>Cronômetro</h3>
        <h3>{start}</h3>
        <button onClick={Iniciar}>Iniciar</button>
        <button onClick={PararCronometro}>Parar</button>
        <button onClick={ZerarCronometro}>Zerar</button>
      </section> */}
    </footer>
  );
}

export default Footer;
