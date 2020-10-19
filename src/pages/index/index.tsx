import * as React from "react";
import { Layout } from "@/component";

interface IProps {}

export const Index: React.FC<IProps> = () => {
  return (
    <Layout title="homepage" description="This is the homepage Page">
      <>
        <p>
          This is the <strong>homepage</strong> page
        </p>
      </>
    </Layout>
  );
};

export default React.memo(Index);
