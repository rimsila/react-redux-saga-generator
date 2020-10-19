import * as React from "react";

import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import HelmetHead from "../helmetHead";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ShareList } from "./share";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import useShare from "./useShare";
import { withStyles } from "@material-ui/core/styles";
import { I18N } from "../..";

const CusMenu = withStyles({
  paper: {
    minWidth: 160,
  },
})(({ ...rest }: any) => (
  <Menu
    open={false}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...rest}
  />
));

const RenderShare = React.memo(({ props }: any) => {
  const {
    handleClick,
    anchorEl,
    handleClose,
    handleMenuClick,
    eventRef,
    title,
    url,
  } = props;

  return (
    <Box mx={1}>
      <Button
        startIcon={<ShareOutlinedIcon />}
        onClick={handleClick}
        ref={eventRef}
      >
        <I18N i18nKey="Share" />
      </Button>
      <CusMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuClick()}>
          <ShareList {...{ title, url }} />
        </MenuItem>
      </CusMenu>
    </Box>
  );
});

export default function ShareSocial({ ...rest }) {
  const {
    anchorEl,
    eventRef,
    handleClick,
    handleClose,
    handleMenuClick,
    url,
  } = useShare();

  return (
    <>
      <HelmetHead {...rest} />

      <RenderShare
        {...{
          url,
          handleClick,
          anchorEl,
          handleClose,
          handleMenuClick,
          eventRef,
        }}
      />
    </>
  );
}
