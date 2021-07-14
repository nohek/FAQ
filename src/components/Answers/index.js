import { FaArrowLeft } from "react-icons/fa";

export function Answers() {
  return (
    <>
      <FaArrowLeft />

      <main>
        <h1>question.title</h1>
        <div>question.answer</div>
        <img src=""></img>
      </main>

      <div className="qualidade">
        Essa resposta foi útil?
        <button>Sim</button>
        <button>Não</button>
      </div>
    </>
  );
}

//como colocar vídeo?
//receber dados da api
//abrir conteudo da resposta com base no ID da pergunta
