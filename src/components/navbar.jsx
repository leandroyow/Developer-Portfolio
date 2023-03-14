import Offcanvas from "./offcanvas"
import Breakpoints from "../hooks/breakpoints";

export default function Navbar () {

  let windowWidth = Breakpoints();

    return (
      windowWidth < 850 ?
      <nav
        style={{ height: 80 }}
        className="d-flex w-100 align-items-center justify-content-between "
      >
        <img style={{height: "70%"}} src="src\assets\logo.png" alt="logo" />

        <i
          className="fa-solid fa-list menu-hamburguer"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        ></i>

        <Offcanvas />
      </nav>
      :
      <nav style={{height:80}} className="d-flex justify-content-between align-items-center ps-5 pe-5 pt-3">
        <img className="logo" style={{height: 50}} src="src\assets\logo.png" alt="logo" />
        <div style={{height: 80, width: 550}} className="d-flex menu-link-container justify-content-evenly gap-5 align-items-center">
        <a className="fs-4 fw-light nav-link" href="#about-section">Sobre</a>
        <a className="fs-4 fw-light nav-link" href="#projects-section"> Projetos</a>
        <a className="fs-4 fw-light nav-link" href="#contact-section"> Contato</a>
        <a filename="CV" href="src\assets\cv-br.pdf" download className="btn btn-outline-success btn-nav">Currículo</a>
      
        </div>
      </nav>

    );
}