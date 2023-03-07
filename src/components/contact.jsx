export default function Contact() {
    return (<div>
        <div style={{ color: "white" }} className="d-flex flex-row mt-5 pt-5 pb-5 mb-3">
            <h3 className="pe-3 ps-2">Contato</h3>
            <hr />
        </div>

        <div className="d-flex justify-content-center gap-5">

        <a href="https://github.com/leandroyow"
           target={"_blank"}>
        <i style={{color:"gray"}} className="fa-brands fa-github contact-icon"></i>
        </a>

        <a href="https://www.linkedin.com/in/leandro-mateus-50a960238/"
           target={"_blank"} >
        <i style={{color:"#0a66c2"}} class="fa-brands fa-linkedin contact-icon"></i>
        </a>

        </div>

        <div style={{width: "100%"}} className="d-flex flex-column align-items-center justify-content-center">


        <form action="submit" className="mt-5 ms-5 me-5 mail-form">
            <div class="mb-3">
                <label style={{color:"rgb(210, 210, 210)"}} for="inputEmail" class="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label style={{color:"rgb(210, 210, 210)"}} autoComplete="on"  for="inputMessage" class="form-label">Mensagem</label>
                <textarea style={{height:250}} autoComplete="on"  className="form-control" id="inputMessage" />
            </div>
            <div className="w-100 text-center">
            <button style={{width:"50%"}} type="submit" className="mt-2 btn btn-outline-success">Enviar</button>
            </div>
        </form>


        </div>
    </div>
    )
}