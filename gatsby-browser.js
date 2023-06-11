import * as React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

import { repositoryConfigs } from "./config/prismic/previews";

import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

import "./src/normalize.css";
import "./src/style.css";

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    {element}
  </PrismicPreviewProvider>
);
