import Offcanvas from "./offcanvas"

export default function Navbar () {
    return (
      <nav
        style={{ height: 80 }}
        className="d-flex w-100 align-items-center justify-content-between "
      >
        <h2 className="fw-bold">{"<LM/>"}</h2>

        <i
          className="fa-solid fa-list menu-hamburguer"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        ></i>

        <Offcanvas />
      </nav>
    );
}