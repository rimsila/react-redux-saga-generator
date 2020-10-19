import * as React from "react";

import { Helmet } from "react-helmet";

const defaultDescription =
  "cambodia, delivery, grocery, food, baverage, drink, stationary, baby mart, flowers, health, bakery";
const defaultKeyword =
  "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.";
const defaultOGURL = "";
const defaultOGImage = "";
const defaultTitle = "Your Daily Delivery Service";

export interface HelmetProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const HelmetHead: React.FC<HelmetProps> = ({
  title,
  description,
  url,
  ogImage,
}) => (
  <Helmet>
    <meta charSet="UTF-8" />
    <title>{`BLOC - ${title || defaultTitle}`}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/images/touch-icon.png" />
    <link rel="apple-touch-icon" href="/images/touch-icon.png" />
    <link rel="mask-icon" href="/images/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/images/favicon.ico" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ""} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="keywords" content={defaultKeyword} />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="author" content="BLOC" />
  </Helmet>
);

export default React.memo(HelmetHead);
