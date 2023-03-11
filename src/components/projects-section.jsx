import Cards from "./cards"

export default function Projects() {
    return (
        <div>
            <div style={{color:"white"}} className="d-flex justify-content-end align-items-center flex-row mt-5 pt-5 pb-5 mb-5 me-5 ms-5 ">
                <hr/>
                <h3 className="ps-3 title-section fs-2 pe-2">Projetos</h3>
                <hr/>
            </div>
            < Cards/>
        </div>
    )
}