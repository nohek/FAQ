import "./styles.scss";
import { FaArrowLeft } from "react-icons/fa";

export function Header() {
  return (
    <>
      <div className="Header">
        <button>
          <FaArrowLeft />
        </button>
        <h1>Como podemos ajudar?</h1>
      </div>
    </>
  );
}
