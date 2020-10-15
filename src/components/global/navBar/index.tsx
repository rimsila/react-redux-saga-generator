import * as React from "react";
import { SelectLanguage } from "@/component";

interface IProps {}

export const NavBar: React.FC<IProps> = (props) => {
  const {} = props;
  return (
    <div className="nav-bar">
      {/* Select Language */}
      <SelectLanguage />
    </div>
  );
};

export default React.memo(NavBar);
