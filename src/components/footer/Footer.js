import PropTypes from "prop-types"
import React from "react"
import './footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <>          
        <footer className="footer">
            © {new Date().getFullYear()}, techblog
            {` `}
        </footer>  
    </>
    )
  }
}
Footer.propTypes = {
  siteTitle: PropTypes.string,
}
Footer.defaultProps = {
  siteTitle: ``,
}
export default Footer
