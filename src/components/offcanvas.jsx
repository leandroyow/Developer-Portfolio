export default function Offcanvas () {
    return (
      <div 
        style={{border: "none !important"}}
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div
        style={{border: "none !important", height: 100}}
        className="offcanvas-header d-flex justify-content-end"
        >

        <i className="fa-solid fa-expand position-relative"
           style={{fontSize: 35,color: "#04E762"}} 
           type="button"
           data-bs-dismiss="offcanvas"
           aria-label="Close" >
            <i className="fa-solid fa-xmark position-absolute top-50 start-50 translate-middle"
               style={{fontSize:15}}
                ></i>
           </i>

         </div>
        <div 
        style={{border: "none !important", backgroundColor:"#022B3A"}}
        className="offcanvas-body d-flex flex-column align-items-center gap-5">
            <a className="fs-4 fw-light" href=""> <span className="number-menu">(</span> Sobre <span className="number-menu">)</span> </a>
            <a className="fs-4 fw-light" href=""> <span className="number-menu">(</span> Stacks <span className="number-menu">)</span> </a>
            <a className="fs-4 fw-light" href=""> <span className="number-menu">(</span> Projetos<span className="number-menu">)</span> </a>
            <a className="fs-4 fw-light" href=""> <span className="number-menu">(</span> Contato <span className="number-menu">)</span> </a>
            <button className="btn btn-outline-success">Currículo</button>

        </div>
      </div>
     
    );
}