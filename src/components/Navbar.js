import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav style={styles.navAll}>
        <div className="nav-wrapper">
          <a style={styles.navLogo} href="http://localhost:3000/" className="brand-logo">
            Mktp-Tools
          </a>
          <ul style={styles.navItems} id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="http://localhost:3000/">Meli</a>
            </li>
            <li>
              <a href="http://localhost:3000/">Cnova</a>
            </li>
            <li>
              <a href="http://localhost:3000/">Magalu</a>
            </li>
          </ul>
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
    marginLeft: '30px'
  },
  navItems: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '600px'
  }
};