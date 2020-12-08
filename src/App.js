import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div>      
      <Weather defaultCity="Kyiv" />
      <Footer />    
    </div>
  );
}

export default App;
