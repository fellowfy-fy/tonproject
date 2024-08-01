import { useState } from "react";
import StakeState from "./stakes/StakeState";
import UnstakeState from "./stakes/UnstakeState";

export default function StakeView() {
  const [view, setView] = useState("stake");

  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-[500px] border-0 rounded-2xl bg-[#222326]">
      <div className="grid grid-cols-2">
        <button
          className="col-span-1 border border-[#353637] hover:border-[#444b4b] rounded-tl-2xl p-2 sm:p-4"
          onClick={() => setView("stake")}
        >
          Stake
        </button>
        <button
          className="col-span-1 border border-[#353637] hover:border-[#444b4b] rounded-tr-2xl p-2 sm:p-4"
          onClick={() => setView("unstake")}
        >
          Unstake
        </button>
      </div>
      <div className="p-4">
        {view === "stake" ? <StakeState /> : <UnstakeState />}
      </div>
    </div>
  );
}
