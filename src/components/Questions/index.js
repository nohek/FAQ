import "./styles.scss";
import { FaAngleRight } from "react-icons/fa";

export function Questions() {
  return (
    <>
      <div className="questions">
        <a href="#">
          Como me tornar um parceiro? <FaAngleRight />
        </a>
        <a href="#">
          Como contratar o serviço? <FaAngleRight />
        </a>
        <a href="#">
          Aplicativo com erro, qual o procedimento? <FaAngleRight />
        </a>
        <a href="#">
          Como me tornar um parceiro? <FaAngleRight />
        </a>
      </div>
    </>
  );
}

//perguntas vao vir da api
//onClick=OpenAnswerById
