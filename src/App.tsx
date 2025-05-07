import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SpaceParticles from "./components/Footer/SpaceParticles";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <SpaceParticles />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
