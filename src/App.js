import Header from "./components/Header/Header";
import WelcomeBlock from "./components/WelcomeBlock/WelcomeBlock";
import About from "./components/About/About";
import Message from "./components/Message/Message";
import ClientReview from "./components/ClientReview/ClientReview";
import PlansCards from "./components/PlansCards/PlansCards";
import Format from "./components/Format/Format";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import FitnessForm from "./components/FitnessForm/FitnessForm";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <WelcomeBlock />
        <About />
        <ClientReview />
        <Message />
        <PlansCards />
        <Format />
        <FAQ />
        <Pricing />
        <FitnessForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
