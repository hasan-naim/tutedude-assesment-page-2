import "./App.css";
import Enrolled from "./components/Enrolled/Enrolled";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ReferSection from "./components/ReferSection/ReferSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ReferSection />
      <Enrolled />
      <Footer />
    </div>
  );
}

export default App;
