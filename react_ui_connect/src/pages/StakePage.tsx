import Banner from "../components/Banner";
import WalletOptions from "../components/WalletOptions";
import StakeView from "../components/StakeView";

export default function StakePage() {
  return (
    <main className="pt-[76px]">
      <div className="bg-[#1d1e20] w-full h-[320px]">
        <Banner />
      </div>
      <div className="bg-[#111113] py-[100px] px-[200px]">
        <WalletOptions />
      </div>
      <div className="bg-[#1d1e20] p-10">
        <StakeView />
      </div>
    </main>
  );
}
