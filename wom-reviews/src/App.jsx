import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProblemSolution from "./components/ProblemSolution";
import Benefits from "./components/Benefits";
import Ingredients from "./components/Ingredients";
import TrustBridge from "./components/TrustBridge";
import ReviewSection from "./components/ReviewSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <ProductDetails />    
      <ProblemSolution />
      <Benefits />
      <Ingredients />
      <TrustBridge />
      <ReviewSection />    
      <CTA />
      <Footer />
    </>
  );
}
