import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Switch, Redirect, matchPath, withRouter } from "react-router";
import ROUTES, { Routes, RouteConfig } from "../routes";
import { NavLink } from "react-router-dom";
import { ListItemIcon } from "@material-ui/core";
import LocaleSelector from "./LanguageSelector";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 64,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuIcon: {
    color: theme.palette.primary.main,
  },
  button: {
    marginLeft: 8,
  },
  appBar: {
    backgroundColor: "transparent",
    display: "flex",
  },
  listItem: {
    color: "#8D8D8D",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    objectFit: "contain",
    width: "100%",
    height: 36,
  },
  loginContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  navItem: {
    color: "#333",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  },
  activeNavItem: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    textDecoration: "none",
  },
  activeText: {
    color: theme.palette.primary.main,
    fontWeight: "bolder",
  },
  inactiveText: {
    color: "#8D8D8D",
  },
  activeIcon: {
    color: "white",
  },
  inactiveIcon: {
    color: "#8D8D8D",
  },
}));

const MenuAppBar: React.FC = (): ReturnType<React.FC> => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  if (
    matchPath(window.location.pathname, {
      path: "/",
      exact: true,
      strict: true,
    })
  ) {
    return <Redirect to="/home" />;
  }

  const drawRoutes = (routes: Routes, padding: number): any => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {Object.values(routes).map((routeParams: RouteConfig) => {
          const isRouteActive = window.location.pathname.includes(
            routeParams.path
          );

          return (
            <>
              <NavLink
                to={{
                  pathname: routeParams.path,
                  search: routeParams.search,
                }}
                onClick={() => setDrawerOpen(false)}
                className={classes.navItem}
                activeClassName={classes.activeNavItem}
              >
                <ListItem
                  button
                  key={routeParams.path}
                  style={{ paddingLeft: padding * 16 }}
                >
                  {routeParams.icon && (
                    <ListItemIcon
                      className={
                        isRouteActive
                          ? classes.activeIcon
                          : classes.inactiveIcon
                      }
                    >
                      {routeParams.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={routeParams.label}
                    classes={{
                      primary: isRouteActive
                        ? classes.activeText
                        : classes.inactiveText,
                    }}
                  />
                </ListItem>
              </NavLink>
              {routeParams.children && (
                <div>{drawRoutes(routeParams.children, padding + 1)}</div>
              )}
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Grid container>
              <Grid item xs={2} sm={4}>
                <Button onClick={() => setDrawerOpen(true)}>
                  <MenuIcon className={classes.menuIcon} />
                </Button>
                <div>
                  <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                  >
                    {drawRoutes(ROUTES, 1)}

                    <LocaleSelector />
                  </Drawer>
                </div>
              </Grid>
              <Grid item sm={4} xs={3} className={classes.logoContainer}>
                <img
                  className={classes.logo}
                  src="https://static.bunchofnothing.com/logo.png"
                  alt="Logo"
                />
              </Grid>
              <Grid
                item
                container
                sm={4}
                xs={7}
                className={classes.loginContainer}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Switch>
          {Object.entries(ROUTES).map(([route, routeParams]) => {
            if (
              !routeParams.children ||
              (!!routeParams.children && routeParams.topLevel)
            ) {
              if (routeParams.public) {
                return (
                  <Route
                    key={route}
                    exact={routeParams.exact ? routeParams.exact : false}
                    component={routeParams.component}
                    path={routeParams.path}
                  />
                );
              }
              return (
                <div
                  style={{
                    color: "white",
                    fontSize: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 32,
                  }}
                >
                  Private Route TBI
                </div>
              );
            }
            return null; // sub routes controlled at component level
          })}
          <Route component={() => <div>Page not found</div>} />
        </Switch>
      </div>
    </>
  );
};

export default withRouter(MenuAppBar);
