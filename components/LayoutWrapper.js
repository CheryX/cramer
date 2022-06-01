import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logoSmall.svg'
import SectionContainer from './SectionContainer'
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <header className="p-3 text-white bgDef">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mx-5 mb-lg-0 text-white text-decoration-none">
              <Logo />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {headerNavLinks.map((link) => (
                <li><a key={link.title} href={link.href} className="nav-link px-2 text-white">{link.title}</a></li>
            ))}
            </ul>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <br />
      <br />
      <br />
      <br />

      <footer className="p-3 bgDef text-white d-flex flex-wrap justify-content-between align-items-center py-3 border-top end">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <Logo />
          </a>
        </div>

        <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Projekt Cramer</span>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-5">
          <li className="ms-3 fs-5"><a className="text-white" href="https://github.com/CheryX/cramer"><i className="bi bi-github"></i></a></li>
          <li className="ms-3 fs-5"><a className="text-white" href="https://discord.gg/gHBzHTr6J"><i className="bi bi-discord"></i></a></li>
          <li className="ms-3 fs-5"><a className="text-muted" href="/"><i className="bi bi-reddit"></i></a></li>
        </ul>
      </footer>
    </SectionContainer>
  )
}

export default LayoutWrapper
