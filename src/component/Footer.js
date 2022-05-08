import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{ color: "#0052ff", fontFamily: "cursive" }}>
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span>© 2022 CodeWithRahul, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-5">
          <li className="ms-3"><i class="fa-brands fa-facebook"><a href="https://www.facebook.com/" /></i></li>
          <li className="ms-3"><i class="fa-brands fa-instagram"></i></li>
          <li className="ms-3"><i class="fa-brands fa-whatsapp"></i></li>
        </ul>
      </footer>
    </div >
  )
}
