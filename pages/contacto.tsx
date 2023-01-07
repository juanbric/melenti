import emailjs from "emailjs-com"
import { useState } from "react";
import { SimpleModal } from "../components/SimpleModal";
import Spacer from "../components/Spacer";

export const ContactForm = () => {
  const [successModal, setSuccessModal] = useState<boolean>(false);

  const handleKeyDown = (e: any) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const SERVICE_ID = "service_y9n1a9t";
  const TEMPLATE_ID = "template_fy238wa";
  const USER_ID = "y7AuvMWzBJ45y1jcI";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result: any) => {
        console.log(result.text);
        setSuccessModal(true);
      },
      (error: any) => {
        console.log(error.text);
        // Error message
      }
    );
    e.target.reset();
  };

  return (
    <div className="py-4 lg:py-6">
      <h1 className="lg:header header-medium vino">contáctanos</h1>
      <Spacer size={12} />
      <h2 className="header-small-bold azul">¡Podemos ayudarte!</h2>
      <form onSubmit={handleSubmit} className="copy azul">
        <h3></h3>
        <Spacer size={16} />
        <h1 className="copy azul"></h1>
        <Spacer size={16} />
        <p>
          Si tienes alguna pregunta, sugerencia o simplemente quieres decir
          hola, no dudes en utilizar esta forma de contacto. Estaremos
          encantados de recibir tus mensajes y responderlos lo antes posible.
          También puedes encontrarnos en nuestras redes sociales, simplemente
          haz clic en los enlaces que encontrarás abajo en el pie de página.
          ¡Esperamos escuchar de ti pronto!
        </p>
        <Spacer size={24} />
        <InputField name={"user_name"} copy={"Tu nombre"} type={"text"} />
        <InputField
          name={"user_email"}
          copy={"Tu correo electrónico"}
          type={"email"}
        />
        <label className="copy-bold azul" htmlFor="message">
          Tu mensaje
        </label>
        <Spacer size={8} />
        <textarea
          className="w-full lg:w-3/5 p-2 bg-[#f5f5f5] outline-none rounded-[12px] copy azul"
          onKeyDown={handleKeyDown}
          style={{ resize: "none" }}
          name="user_message"
        />
        <Spacer size={16} />
        <button
          type="submit"
          className="px-4 py-2 bg-vino copy-bold text-white rounded-[8px]"
        >
          Enviar
        </button>
      </form>
      <SimpleModal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        headerText={"¡Gracias!"}
        description={"Nos pondremos en contacto contigo en en breve."}
      />
    </div>
  );
};

const InputField = ({
  name,
  copy,
  type,
}: {
  name: string;
  copy: string;
  type: string;
}) => {
  return (
    <>
      <label className="copy-bold azul" htmlFor={name}>
        {copy}
      </label>
      <Spacer size={8} />
      <input
        className="p-2 bg-[#f5f5f5] outline-none rounded-[12px] copy azul"
        type={type}
        name={name}
        required
      />
      <Spacer size={16} />
    </>
  );
};

export default ContactForm;
