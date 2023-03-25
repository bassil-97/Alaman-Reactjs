import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import OurPrograms from "./pages/OurPrograms";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <OurPrograms />
      <Footer />
    </div>
  );
}

export default App;
