import FloatingDecorations from "./components/FloatingDecorations";
import HeroSection from "./components/HeroSection";
import ContractSection from "./components/ContractSection";
import GallerySection from "./components/GallerySection";
import FeyzagramSection from "./components/FeyzagramSection";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <FloatingDecorations />
      <HeroSection />
      <ContractSection />
      <GallerySection />
      <FeyzagramSection />
    </div>
  );
}
