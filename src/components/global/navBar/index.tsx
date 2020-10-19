import * as React from "react";
import { SelectLanguage } from "@/component";
import { AppBar, Container, Link, makeStyles } from "@material-ui/core";
import { Avatar, Toolbar } from "@material-ui/core";

interface IProps {}

const useStyles = makeStyles((theme) => ({
  blocLogo: {
    marginRight: theme.spacing(2),
  },
  logoContainer: {
    width: theme.spacing(12),
    height: theme.spacing(8),
  },
  logo: {
    objectFit: "contain",
    cursor: "pointer",
  },
  btnOutline: {
    padding: theme.spacing(1, 5),
  },
  plusIcon: {
    fontSize: 14,
  },
  iconSize: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  badge: {
    padding: 0,
  },
  btnCart: {
    borderColor: theme.palette.grey[100],
    marginLeft: theme.spacing(1),
  },
  btnSearch: {
    borderColor: theme.palette.grey[100],
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  imgContain: {
    objectFit: "contain",
  },
  navbar: {
    zIndex: 1101,
  },
}));

export const NavBar: React.FC<IProps> = (props) => {
  const {} = props;

  const classes = useStyles();
  return (
    <AppBar
      className={classes.navbar}
      position="sticky"
      color="default"
      elevation={1}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Link className={classes.blocLogo}>
            <Avatar
              //   classes={{ root: classes.logoContainer, img: classes.logo }}
              src="/images/Color@3x.png"
              //   variant="square"
            />
          </Link>
          {/* -------------- */}

          {/* ----------------------- */}
          {/* Select Language */}
          <SelectLanguage />

          {/* ------------------ */}

          {/* ------------------ */}
        </Toolbar>
      </Container>

      {/* ----------------------- */}
    </AppBar>
  );
};

export default React.memo(NavBar);
