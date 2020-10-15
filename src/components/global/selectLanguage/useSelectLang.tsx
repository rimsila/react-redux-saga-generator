import { useState } from "react";

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import React = require("react");
import us from "../../../static/images/us.png";
import kh from "../../../static/images/km.png";
import { useLocalStorageState, usePersistFn, useSetState } from "ahooks";

const Icons: React.FC<{ src: string }> = ({ src }) => (
  <img src={src} alt="" width="21px" />
);

const useSelectLang = () => {
  const { t, i18n } = useTranslation();
  // * === menu items ===
  const menus = [
    {
      label: t("en"),
      icon: us,
      code: "us",
    },
    {
      icon: kh,
      label: t("km"),
      code: "km",
    },
    {
      icon: kh,
      label: t("ch"),
      code: "ch",
    },
  ];

  const [selectLang, setSelectLang] = useSetState({
    label: menus[0].label,
    icon: menus[0].icon,
    code: menus[0].code,
  });
  const [locale, setLocale] = useLocalStorageState<{
    icon: string;
    label: string;
    code: string;
  }>("locale", {
    label: selectLang.label,
    icon: selectLang.icon,
    code: selectLang.code,
  });

  const [anchorEl, setAnchorEl] = useState(null);

  //* eventRef for open the menu base on notification has data
  const eventRef = useRef(null);

  //* find notification isReadNotification
  const handleClick = usePersistFn(() => {
    setAnchorEl(eventRef.current);
  });
  const handleClose = usePersistFn(() => {
    setAnchorEl(null);
  });

  const changeLanguage = (label) => {
    i18n.changeLanguage(label);
  };

  const handleMenuClick = usePersistFn((val) => {
    changeLanguage(val.code);
    setLocale({
      label: val.label,
      icon: val.icon,
      code: val.code,
    });
    setSelectLang({
      icon: val.icon,
      label: val.label,
      code: val.code,
    });

    handleClose();
  });

  React.useEffect(() => {
    // * change i18n from local storage
    handleMenuClick({
      label: locale.label,
      icon: locale.icon,
      code: locale.code,
    });
  }, []);

  return {
    anchorEl,
    menus,
    eventRef,
    handleClick,
    handleMenuClick,
    handleClose,
    selectLang,
    Icons,
  };
};

export default useSelectLang;
