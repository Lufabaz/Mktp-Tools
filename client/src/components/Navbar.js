import React from 'react'

export default function Navbar({onClickResource}) {
  let homePage = "http://localhost:3000/" || "https://mktp-tools.herokuapp.com/"

/*   const clickResource = (event) => {
    event.preventDefault()
    const flag = true
    onClickResource(event.target.id,flag)
  } */

  return (
    <div>
      <nav style={styles.navAll}>
        <div style={{ marginLeft: '30px', marginRight: '30px' }} className="nav-wrapper">
          <a style={styles.navLogo} href={homePage} className="center brand-logo">
            Mktp-Tools
          </a>
          {/* <ul style={styles.navItems} id="nav-mobile" className="right brand-logo">
            <li>
              <a id="meli" href="" onClick={clickResource}>Meli</a>
            </li>
            <li>
              <a id="cnova" href="" onClick={clickResource}>Cnova</a>
            </li>
            <li>
              <a id="magalu" href="" onClick={clickResource}>Magalu</a>
            </li>
          </ul> */}
        </div>
      </nav>
    </div>
  )
}

const styles = {
  navAll: {
    backgroundColor: '#2c3e50',
  },
  navLogo: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navItems: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '30px'
  }
};