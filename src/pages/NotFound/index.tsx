import * as React from "react";

import { I18N, NavBar } from "@/component";
import Layout from "@/components/global/layout";
import { Content } from "@/component";

const NotFound = () => {
  return (
    <Layout title="404">
      <NavBar />
      <Content maxWidth="md">
        <I18N i18nKey="homepage" />
      </Content>
    </Layout>
  );
};

export default React.memo(NotFound);
