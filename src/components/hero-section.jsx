import Breakpoints from "../hooks/breakpoints"
import { useState, useEffect } from "react";

export default function Hero() {

    let windowWidth = Breakpoints();

    return (
        <div className="mt-5 ps-5 pe-5">
            <p className="text-main mb-0 pt-4" style={{lineHeight: 0}} >Olá, meu nome é</p><br/>
            <h3 style={{color:"white", fontSize: "2rem"}}>Leandro Mateus.</h3>
            <p style={{color: "gray", fontSize: windowWidth <= 408 ? "0.9rem" : "1.2rem"}}>Sou um desenvolvedor Front End e meu
             hábito mais recorrente é o aprendizado.</p>

             <p style={{color: "gray"}} className="fw-light">Eu pratico programação desde desde maio de 2022 quando iniciei meus estudos na Kenzie Academy, lá aprendi toda a base do desenvolvimento Front End e pude construir diversos projetos e aprender com muitas pessoas e profissionais excelentes, hoje continuo a minha jornada de construção de projetos(como esse portfólio), absorvendo conhecimento e me adaptando a cada novo desafio! </p>

        </div>
    )
}