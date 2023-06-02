import { useState } from "react";
import Boton from "./Boton";

const Mensaje = ({ textoMensaje }) => {
  const [msj, setMsj] = useState("");

  const handleclick = () => {
    setMsj("from changed state");
  };

  return (
    <section className="container p-4 my-4">
      <h1 className="display-2 text-center">
        Hello {textoMensaje}!, {msj}{" "}
      </h1>
      <div className="d-grid gap-2 p-4">
        {" "}
        <Boton onClick={handleclick} />
      </div>
    </section>
  );
};

export default Mensaje;
