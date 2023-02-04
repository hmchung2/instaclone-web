import { useReactiveVar } from "@apollo/client";
import { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./apollo";

import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightGray",
};

const darkTheme = {
  fontColor: "#lightGray",
  bgColor: "#2c2c2c",
};

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              {isLoggedIn ? <Home /> : <Login />}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
