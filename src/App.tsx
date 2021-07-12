import { createTheme, ThemeProvider } from "@material-ui/core";
import React, { Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
const LoginComponent = React.lazy(() => import("./Login"));
const SignupComponent = React.lazy(() => import("./Signup"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#39c2d7",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/signup" component={SignupComponent} />
            <Route path="/login" component={LoginComponent} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
