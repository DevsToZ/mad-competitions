import { Helmet } from "react-helmet";
import { FRONT_END_BASE_URL, WEBSITE_NAME } from "../../lib/consts";
import logo from "./../../assets/logo.png";

interface MetaTags {
  title: string;
  primary_description: string;
  secondary_description: string;
  image?: string;
  url?: string;
}

export const MetaTags = ({
  title,
  primary_description,
  image = logo,
  secondary_description,
  url,
}: MetaTags) => {
  return (
    <Helmet>
      <title>{`${WEBSITE_NAME} - ${title}`}</title>
      <meta name="description" content={primary_description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={secondary_description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${FRONT_END_BASE_URL}${url}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={secondary_description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
