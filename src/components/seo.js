// import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"

// export const Seo = ({ title, description, pathname, children }) => {
//     const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

//     const seo = {
//         title: title || defaultTitle,
//         description: description || defaultDescription,
//         url: `${siteUrl}${pathname || ``}`,
//     }

//     return (
//         <>
//             <title>{seo.title}</title>
//             <meta name="description" content={seo.description} />
//             <meta name="twitter:title" content={seo.title} />
//             <meta name="twitter:url" content={seo.url} />
//             <meta name="twitter:description" content={seo.description} />
//             {children}
//         </>
//     )
// }

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, lang, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
};

export default Seo;
