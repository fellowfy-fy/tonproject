import { useEffect, useState, useContext } from "react";
import StakePage from "./pages/StakePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminComponent from "./components/AdminComponent";
import { TonConnectUIContext } from "@tonconnect/ui-react";
import type { Wallet } from "@tonconnect/sdk";

function App() {
  const [publicKey, setPublicKey] = useState("");
  const tonConnectUI = useContext(TonConnectUIContext);

  useEffect(() => {
    if (!tonConnectUI) return;

    const handleConnection = (wallet: Wallet | null) => {
      if (wallet && wallet.account && wallet.account.publicKey) {
        setPublicKey(wallet.account.publicKey);
      } else {
        setPublicKey("");
      }
    };

    // Check if already connected
    handleConnection(tonConnectUI.wallet);

    // Subscribe to status changes
    const unsubscribe = tonConnectUI.onStatusChange(handleConnection);

    // Cleanup event listener on component unmount
    return () => {
      unsubscribe();
    };
  }, [tonConnectUI]);

  return (
    <section>
      <div className="w-full h-[75px] bg-[#111113] border-b border-[#353637] fixed">
        <Navbar />
      </div>
      <StakePage />
      {publicKey ? (
        <div className="bg-[#111113]">
          <AdminComponent />
        </div>
      ) : (
        <></>
      )}
      <div className="w-full bg-[#111113]">
        <Footer />
      </div>
    </section>
  );
}

export default App;
