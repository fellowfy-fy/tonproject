export default function StakeState() {
  return (
    <div className="p-10 h-[330px]">
      <h1 className="font-bold text-3xl">Stake</h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="text" placeholder="Input Amount" />
        <label htmlFor="referal">Referal ID</label>
        <input id="referal" type="text" placeholder="Input Referal ID" />
      </div>
      <div className="flex justify-around p-5">
        <h1>Текущая ставка</h1>
        <div>
          <p className="text-center">18%</p>
          <p>Годовых</p>
        </div>
      </div>
      <button className=" border border-[#353637] hover:border-[#444b4b] w-full rounded-2xl">
        Stake
      </button>
    </div>
  );
}
