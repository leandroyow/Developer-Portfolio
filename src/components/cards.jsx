export default function Cards() {
    return (
        <div className="ps-4 pe-4  d-flex flex-wrap align-items-center justify-content-evenly gap-5" >

            <div className="card" style={{width: 500 }}>
                <img src="src\assets\landing-page.png" className="card-img-top" alt="project"/>
                    <div className="card-body">
                    <div className="card-title description-text fw-bold fs-5">Sneakers Landing Page</div>
                        <p style={{height:90}}className="card-text description-text">Uma landing page de um produto de e-commerce com implementação de carrinho, feita com React e Bootstrap</p>
                        <div className="d-flex justify-content-around align-items-center gap-4">
                        <button className="btn btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-brands fa-github site"></i>Repositório
                        </button>
                        <button className="btn btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">

                        <i className="fa-solid fa-arrow-up-right-from-square site"></i>Deployed
                        </button>
                        </div>
                    </div>
            </div>

            <div className="card" style={{width: 500 }}>
                <img src="src\assets\open-music-base.png" className="card-img-top" alt="project"/>
                    <div className="card-body">
                    <div className="card-title description-text fw-bold fs-5">Open Music Base</div>
                        <p style={{height:90}}className="card-text description-text">Uma database de discos que pode ser filtrados por gênero, preço ou ambos, com opção de Dark Mode.</p>
                        <div className="d-flex justify-content-around align-items-center gap-4">
                        <button className="btn btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-brands fa-github site"></i>Repositório
                        </button>
                        <button className="btn btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">

                        <i className="fa-solid fa-arrow-up-right-from-square site"></i>Deployed
                        </button>
                        </div>
                    </div>
            </div>

            <div className="card" style={{width: 500 }}>
                <img src="src\assets\control-finance.png" className="card-img-top" alt="project"/>
                    <div className="card-body">
                    <div className="card-title description-text fw-bold fs-5">Control Finance</div>
                        <p style={{height:90}}className="card-text description-text">Uma ferramenta para o controle de gastos onde podem ser adicionados os valores de entrada que são adicionados e os de saída que são subtraídos do montante total. Disponível a filtragem de valores por categoria.</p>
                        <div className="d-flex justify-content-around align-items-center gap-4">
                        <button className="btn btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-brands fa-github site"></i>Repositório
                        </button>
                        <button className="btn btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">

                        <i className="fa-solid fa-arrow-up-right-from-square site"></i>Deployed
                        </button>
                        </div>
                    </div>
            </div>

            <div className="card" style={{width: 500 }}>
                <img src="src\assets\webwomen.png" className="card-img-top" alt="project"/>
                    <div className="card-body">
                    <div className="card-title description-text fw-bold fs-5">Webwomen</div>
                        <p style={{height:90}}className="card-text description-text">Uma ferramenta de aplicação de vagas de emprego para mullheres. A candidata pode aplicar para várias vagas ao mesmo tempo e retirar a candidatura caso queira a qualquer momento.</p>
                        <div className="d-flex justify-content-around align-items-center gap-4">
                        <button className="btn btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">
                        <i className="fa-brands fa-github site"></i>Repositório
                        </button>
                        <button className="btn btn-outline-success btn-card d-flex align-items-center justify-content-center gap-2">

                        <i className="fa-solid fa-arrow-up-right-from-square site"></i>Deployed
                        </button>
                        </div>
                    </div>
            </div>
           


        </div>
    )
}