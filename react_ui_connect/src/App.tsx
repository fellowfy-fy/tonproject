import StakePage from "./pages/StakePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminComponent from "./components/AdminComponent";

function App() {
  return (
    <section>
      <div className="w-full h-[75px] bg-[#111113] border-b border-[#353637] fixed">
        <Navbar />
      </div>
      <StakePage />
      <div className="bg-[#111113]">
        <AdminComponent />
      </div>
      <div className="w-full bg-[#111113]">
        <Footer />
      </div>
    </section>
  );
}

export default App;
