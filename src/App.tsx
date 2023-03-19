import React from 'react';
import './App.css';
import {Container} from "@mui/material";
import CustomInput from "./ui/CustomInput/CustomInput";

function App() {
  return (
    <div className="App">
      <Container>
          <CustomInput/>
      </Container>
    </div>
  );
}

export default App;
