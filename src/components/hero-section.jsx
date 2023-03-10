import Breakpoints from "../hooks/breakpoints"

export default function Hero() {

    let windowWidth = Breakpoints();

    return (
        <div className="d-flex justify-content-center">
        <div style={{marginTop: windowWidth < 425 ? 30 : 70}}  className="hero-section-container ms-5 me-5">
        
            <p className="text-main mb-0 mt-4" style={{lineHeight: 0, color:"#04E762", fontSize: windowWidth >= 600 ? "1.5rem" : "1rem"}} >Olá, meu nome é</p><br/>
            <h3 className="name-hero" style={{color:"white", fontSize: windowWidth >= 700 ? "3.5rem": windowWidth <= 325 ? "1.7rem" : "2rem" }}>Leandro Mateus.</h3>
            <p className="text-second" style={{color: "gray", fontSize: windowWidth <= 460 ? "1rem" : "1.5rem"}}>Sou um desenvolvedor Front End.</p>
            <p style={{color: "rgb(210, 210, 210)", fontSize: windowWidth >=700 ? "1.2rem": windowWidth <= 420 ? "0.7rem": 18 }} className="fw-light description-hero">Eu pratico programação desde desde maio de 2022 quando iniciei meus estudos na Kenzie Academy, lá aprendi toda a base do desenvolvimento Front End e pude construir diversos projetos e aprender com muitas pessoas e profissionais excelentes, hoje continuo a minha jornada de construção de projetos(como esse portfólio), absorvendo conhecimento e me adaptando a cada novo desafio! </p>
                
        </div>
        </div>
    )
}