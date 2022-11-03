import React from "react";
import TextField from "@mui/material/TextField";

const App = () => {
  return (
    <div className="mainWrapper">
      <TextField
        id="outlined-basic"
        label="Simple Outline"
        variant="outlined"
      />
      <div className="inputWrapper">
        <TextField
          id="outlined-basic"
          label="Modified Outline"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default App;
