import Breakpoints from "../hooks/breakpoints"

export default function Hero() {

    let windowWidth = Breakpoints();

    return (
        <div className="mt-5 ms-5 me-5">
            <p className="text-main mb-0 mt-4" style={{lineHeight: 0}} >Olá, meu nome é</p><br/>
            <h3 style={{color:"white", fontSize: "2rem"}}>Leandro Mateus.</h3>
            <p style={{color: "gray", fontSize: windowWidth <= 408 ? "0.9rem" : "1.2rem"}}>Sou um desenvolvedor Front End e meu
             hábito mais recorrente é o aprendizado.</p>

             <p  className="fw-light description-text">Eu pratico programação desde desde maio de 2022 quando iniciei meus estudos na Kenzie Academy, lá aprendi toda a base do desenvolvimento Front End e pude construir diversos projetos e aprender com muitas pessoas e profissionais excelentes, hoje continuo a minha jornada de construção de projetos(como esse portfólio), absorvendo conhecimento e me adaptando a cada novo desafio! </p>
                
        </div>
    )
}