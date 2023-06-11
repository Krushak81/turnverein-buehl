// import * as React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Navbar from "./navbar"
// import "./layout.scss"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <div className="container-fluid p-0">
//       <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <main>
//         {children}
//       </main>
//     </div>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout


import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
