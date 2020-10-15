import * as React from "react";

import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useSelectLang from "./useSelectLang";
import { withStyles } from "@material-ui/core/styles";

interface IProps {
  handleClick;
  anchorEl;
  handleClose;
  handleMenuClick;
  menus;
  eventRef;
  selectLang;
  Icons;
}
const CusMenu = withStyles({
  paper: {
    minWidth: 160,
  },
})((props: any) => (
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
    {...props}
  />
));

const RenderMenu: React.FC<IProps> = React.memo((props) => {
  const {
    handleClick,
    anchorEl,
    handleClose,
    handleMenuClick,
    menus,
    eventRef,
    selectLang,
    Icons,
  } = props;

  return (
    <Box mx={1}>
      <Button
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
        ref={eventRef}
        style={{
          minWidth: 100,
        }}
      >
        <Icons src={selectLang?.icon} /> &nbsp;
        {selectLang?.label === "English" ? "EN" : selectLang?.label}
      </Button>
      <CusMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menus?.map(
          (
            val: { icon: React.ReactNode; label: React.ReactNode },
            index: React.ReactText,
          ) => (
            <MenuItem key={index} onClick={() => handleMenuClick(val, index)}>
              <ListItemIcon
                style={{
                  minWidth: 40,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}
              >
                <Icons src={val?.icon} />
              </ListItemIcon>

              <ListItemText
                primaryTypographyProps={{ variant: "body2" }}
                primary={val.label}
              />
              {val.label === selectLang?.label && (
                <CheckIcon color="primary" fontSize="small" />
              )}
            </MenuItem>
          ),
        )}
      </CusMenu>
    </Box>
  );
});

export default function SelectLanguage() {
  const {
    anchorEl,
    menus,
    eventRef,
    handleClick,
    handleClose,
    handleMenuClick,
    selectLang,
    Icons,
  } = useSelectLang();

  return (
    <>
      <RenderMenu
        {...{
          Icons,
          selectLang,
          handleClick,
          anchorEl,
          handleClose,
          handleMenuClick,
          menus,
          eventRef,
        }}
      />
    </>
  );
}
