import Banner from "../components/Banner";
import WalletOptions from "../components/WalletOptions";
import StakeView from "../components/StakeView";

export default function StakePage() {
  return (
    <main>
      <div className="bg-[#1d1e20] w-full lg:h-[320px] h-auto">
        <Banner />
      </div>
      <div className="bg-[#111113] py-10 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60">
        <WalletOptions />
      </div>
      <div className="bg-[#1d1e20] p-4 sm:p-10">
        <StakeView />
      </div>
    </main>
  );
}
