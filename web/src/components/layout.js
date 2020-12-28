import React from 'react'
import Header from './header'
import Footer from './footer'
import CookieConsent from 'react-cookie-consent';

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <Footer />
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {/* {companyInfo.name} */}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>

        <div className={styles.siteInfo}>
          © {new Date().getFullYear()} HCDW, registered company in England and Wales 12007094
        </div>
      </div>
    </footer>
    <CookieConsent 
          style={{ 
            background: "black", 
            color: "white",  
          }}
          buttonStyle={{ 
            background: "#decdb9",
            fontWeight: "bold" 
          }}
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          This website uses cookies to improve your user experience
    </CookieConsent>
  </>
)

export default Layout
