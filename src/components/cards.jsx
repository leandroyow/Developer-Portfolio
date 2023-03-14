export default function Cards() {

    
    return (
        <div className="ps-4 pe-4  d-flex flex-wrap align-items-center justify-content-evenly gap-5" >

            <div className="card" style={{width: 500 }}>
                <img src="src\assets\landing-page.png" className="card-img-top" alt="project"/>
                    <div className="card-body">
                    <div className="card-title description-text fw-bold fs-5">Sneakers Landing Page</div>
                        <p style={{height:90}}className="card-text description-text">Uma landing page responsiva de um produto de e-commerce com implementação de carrinho, galeria Lightbox, off-canvas e carousel feita com React e Bootstrap</p>
                        <div className="d-flex justify-content-around align-items-center gap-4">
                        <a target="_blank" href="https://github.com/leandroyow/landing-page-react-and-bootstrap"  className="btn btn-card-link btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-brands fa-github site"></i>Repositório
                        </a>
                        <a target="_blank" href="https://leandroyow.github.io/landing-page-react-and-bootstrap/" className="btn btn-card-link btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">

                        <i className="fa-solid  fa-arrow-up-right-from-square site"></i>Deployed
                        </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={{width: 500 }}>
                <img src="src\assets\open-music-base.png" className="card-img-top" alt="project"/>
                    <div className="card-body">
                    <div className="card-title description-text fw-bold fs-5">Open Music Base</div>
                        <p style={{height:90}}className="card-text description-text">Uma database de discos que podem ser filtrados por gênero, preço ou ambos, com opção de Dark Mode.</p>
                        <div className="d-flex justify-content-around align-items-center gap-4">
                        <a target="_blank" href="https://github.com/Kenzie-Academy-Brasil-Developers/Open-Music-Base-Leandro-Mateus"  className="btn btn-outline-success btn-card-link btn-card d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-brands fa-github site"></i>Repositório
                        </a>
                        <a target="_blank" href="https://kenzie-academy-brasil-developers.github.io/Open-Music-Base-Leandro-Mateus/"  className="btn btn-outline-success btn-card-link btn-card d-flex align-items-center justify-content-center gap-2">

                        <i className="fa-solid fa-arrow-up-right-from-square site"></i>Deployed
                        </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={{width: 500 }}>
                <img src="src\assets\control-finance.png" className="card-img-top" alt="project"/>
                    <div className="card-body">
                    <div className="card-title description-text fw-bold fs-5">Control Finance</div>
                        <p style={{height:90}}className="card-text description-text">Uma ferramenta para o controle de gastos onde podem ser adicionados os valores de entrada e os de saída que são acrescentados ou subtraídos do montante total. Disponível a filtragem de valores por categoria.</p>
                        <div className="d-flex justify-content-around align-items-center gap-4">
                        <a target="_blank" href="https://github.com/Kenzie-Academy-Brasil-Developers/Control-Finance-Leandro-Mateus"  className="btn btn-outline-success btn-card-link btn-card d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-brands fa-github site"></i>Repositório
                        </a>
                        <a target="_blank" href="https://kenzie-academy-brasil-developers.github.io/Control-Finance-Leandro-Mateus/"  className="btn btn-outline-success btn-card-link btn-card d-flex align-items-center justify-content-center gap-2">

                        <i className="fa-solid fa-arrow-up-right-from-square site"></i>Deployed
                        </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={{width: 500 }}>
                <img src="src\assets\webwomen.png" className="card-img-top" alt="project"/>
                    <div className="card-body">
                    <div className="card-title description-text fw-bold fs-5">Webwomen</div>
                        <p style={{height:90}}className="card-text description-text">Uma ferramenta de aplicação de vagas de emprego para mullheres. A candidata pode aplicar para várias vagas ao mesmo tempo e retirar candidaturas caso queira, a qualquer momento.</p>
                        <div className="d-flex justify-content-around align-items-center gap-4">
                        <a target="_blank" href="https://github.com/Kenzie-Academy-Brasil-Developers/WebWoman-Leandro-Mateus"  className="btn btn-outline-success btn-card-link btn-card d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-brands fa-github site"></i>Repositório
                        </a>
                        <a target="_blank" href="https://kenzie-academy-brasil-developers.github.io/WebWoman-Leandro-Mateus/"  className="btn btn-outline-success btn-card-link btn-card d-flex align-items-center justify-content-center gap-2">

                        <i className="fa-solid fa-arrow-up-right-from-square site"></i>Deployed
                        </a>
                        </div>
                    </div>
            </div>
           


        </div>
    )
}