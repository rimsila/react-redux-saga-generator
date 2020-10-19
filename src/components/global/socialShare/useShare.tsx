import { useCallback, useState } from "react";

import usePersistFn from "ahooks/es/usePersistFn";
import { useRef } from "react";

const useShare = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const eventRef = useRef(null);

  const handleClick = useCallback(() => {
    setAnchorEl(eventRef.current);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  const url = window.location.href;

  const handleMenuClick = usePersistFn(() => {
    handleClose();
  });

  return {
    url,
    anchorEl,
    eventRef,
    handleClick,
    handleMenuClick,
    handleClose,
  };
};

export default useShare;
