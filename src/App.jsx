import "./App.css";
import Landingpage from "./Components/LandingPage";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="w-full overflow-hidden px-2.5">
        <Landingpage />
        <Footer />
      </div>
    </>
  );
}

export default App;
