import "./styles.scss";
import { FaSearch } from "react-icons/fa";

export function Categories() {
  return (
    <>
      <div className="Container">
        <header>
          <h2>Perguntas Frequentes</h2>
          <button>
            <FaSearch />
          </button>
        </header>

        <nav>
          <a> Rotas </a>
          <a> Valores </a>
          <a> Solicitações </a>
          <a> Contato </a>
          <a> Contato </a>
          <a> Contato </a>
        </nav>
      </div>
    </>
  );
}

//depois as categorias vao ser geradas automaticamente
