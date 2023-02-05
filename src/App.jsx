import { Canvas } from "@react-three/fiber";
import Experince from "./Components/Experince";
import Configurator from "./Components/Configurator";
import "./App.css";
import { CustomizationProvider } from "./Components/contexts/Customization";

function App() {
  return (
  <CustomizationProvider>
   <div className="App">
    

    <Canvas>
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#213547", 10, 20]} />
     <Experince/>
    </Canvas>
    <Configurator/>
  </div>;
  </CustomizationProvider>
  );
}
export default App;