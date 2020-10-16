import * as React from "react";
import Head from "./head";

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly title: string;
  readonly description?: string;
  readonly url?: string;
  readonly ogImage?: string;
}

const Layout: React.FC<Props> = ({
  title,
  description,
  url,
  ogImage,
  children,
}) => (
  <>
    <Head title={title} description={description} ogImage={ogImage} url={url} />
    <>{children}</>
  </>
);

export default Layout;
