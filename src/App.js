// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Mankirat <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import * as React from "react";
import AppBar from "./components/ui/header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
const pageTheme = createTheme({
  palette: {
    primary: {
      main: "#1F2833",
    },
  },
  typography: {},
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={pageTheme}>
        <BrowserRouter>
          <AppBar />
          <Routes>
            {routes.map((page,index) => {
              return <Route path={page.path} element={page.element} key={index} />;
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
