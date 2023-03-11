import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();
  const [IsEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_03qmxbt",
        "template_h1ujwkk",
        form.current,
        "XRn9dbxzV1qrTmXhv"
      )
      .then(
        (result) => {
          setIsEmailSent(true);
        },
        (error) => {
          setIsEmailSent(false);
        }
      );
  };

  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");

  if (toastTrigger) {
    toastTrigger.addEventListener("click", () => {

      const emailField = document.querySelector("#inputEmail");
      const messageField = document.querySelector("#inputMessage");

      if (IsEmailSent && emailField.value !== "" && messageField.value !== "") {
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
      }
    });
  }

  return (
    <div>
      <div
        style={{ color: "white" }}
        className="d-flex align-items-center flex-row mt-5 pt-5 pb-5 mb-3 ms-5 me-5"
      >
         <hr />
        <h3 className="pe-3 ps-2 title-section fs-2">Contato</h3>
        <hr />
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <i className="fa-solid fa-envelope-circle-check rounded me-2"></i>
            <strong className="me-auto">Mensagem enviada com sucesso!</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
            <div style={{color:"gray !important"}} className="toast-body">
              Em breve entrarei em contato.
            </div>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-5">
        <a href="https://github.com/leandroyow" target={"_blank"}>
          <i
            style={{ color: "gray" }}
            className="fa-brands fa-github contact-icon"
          ></i>
        </a>

        <a
          href="https://www.linkedin.com/in/leandro-mateus-50a960238/"
          target={"_blank"}
        >
          <i
            style={{ color: "#0a66c2" }}
            className="fa-brands fa-linkedin contact-icon"
          ></i>
        </a>
      </div>

      <div
        style={{ width: "100%" }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          action="submit"
          className="mt-5 ms-5 me-5 mb-2 mail-form"
        >
          <h1 className="text-center" style={{color:"white"}}></h1>
          <div className="mb-3">
            <label
              style={{ color: "rgb(210, 210, 210)" }}
              htmlFor="inputEmail"
              className="form-label"
            >
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="form-control"
              name="user_name"
              id="inputName"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label
              style={{ color: "rgb(210, 210, 210)" }}
              htmlFor="inputEmail"
              className="form-label"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="form-control"
              name="user_email"
              id="inputEmail"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className="mb-3">
            <label
              style={{ color: "rgb(210, 210, 210)" }}
              autoComplete="on"
              htmlFor="inputMessage"
              className="form-label"
            >
              Mensagem
            </label>
            <textarea
              style={{ height: 250 }}
              name="message"
              placeholder="..."
              className="form-control"
              id="inputMessage"
              required
            />
          </div>
          <div className="w-100 text-center">
            <input
              style={{ width: "50%" }}
              type="submit"
              value="Enviar"
              className="btn btn-outline-success"
              id="liveToastBtn"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
