import logo from "./logo.png";
import carrinho from "./carrinho-de-compras.png";

function Header() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="logo-padaria-pao-mel" />
        <ul>
          <li>Cardápio</li>
          <li>Contatos</li>
          <li>Encomendas</li>
          <li>Unidades</li>
        </ul>
        <img src={carrinho} alt="carrinho-compras" />
      </nav>
    </header>
  );
}

export default Header;
