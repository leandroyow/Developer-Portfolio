import Breakpoints from "../hooks/breakpoints"

export default function Stacks() {

    let windowWidth = Breakpoints();
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    return (   
        <div>
            <p style={{color: "rgb(210, 210, 210)", fontSize: windowWidth >=700 ? "1.2rem": windowWidth <= 420 ? "0.7rem":18}} className="stacks-section-container description-hero fw-light ms-5 me-5 mt-2">Eu amo o aprendizado baseado em projetos, ter que aprender enquanto faço e construo coisas não é fácil, mas foi algo que me atraiu muito e sempre foi gratificante. Aprendi e estou aprendendo e aprimorando habilidades e ferramentas de trabalho todos os dias:</p>
            <div className="stacks-section-container ms-5 me-5 pt-5 d-flex justify-content-evenly">
            <i style={{color:"#f54d27"}} className="fa-brands d-inline-block fa-git-alt stack" data-bs-placement="top" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Git"></i>
            <i style={{color:"#f26528"}} className="fa-brands d-inline-block fa-html5 stack" data-bs-placement="top" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="HTML5"></i>
            <i style={{color:"#264de4"}} className="fa-brands d-inline-block fa-css3-alt stack" data-bs-placement="top" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="CSS3"></i>
            <i style={{color:"#edd62e"}} className="fa-brands d-inline-block fa-js stack" data-bs-placement="top" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="JavaScript (ES6+)"></i>
            <i style={{color:"#61dafb"}} className="fa-brands d-inline-block fa-react stack" data-bs-placement="top" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="React"></i>
            <i style={{color:"#7310f5"}} className="fa-brands d-inline-block fa-bootstrap stack" data-bs-placement="top" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Bootstrap 5"></i>

            </div>
        </div>
        )
}