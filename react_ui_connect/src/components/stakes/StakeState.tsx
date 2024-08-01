export default function StakeState() {
  return (
    <div className="p-4 sm:p-6 md:p-10 h-auto">
      <h1 className="font-bold text-2xl sm:text-3xl mb-4">Stake</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          placeholder="Input Amount"
          className="p-2 border border-[#353637] rounded-md"
        />
        <label htmlFor="referal">Referral ID</label>
        <input
          id="referal"
          type="text"
          placeholder="Input Referral ID"
          className="p-2 border border-[#353637] rounded-md"
        />
      </div>
      <div className="flex justify-around p-4 sm:p-5 mt-4">
        <h1>Текущая ставка</h1>
        <div>
          <p className="text-center text-lg sm:text-xl">18%</p>
          <p className="text-sm sm:text-base">Годовых</p>
        </div>
      </div>
      <button className="border border-[#353637] hover:border-[#444b4b] w-full rounded-2xl p-2 sm:p-4">
        Stake
      </button>
    </div>
  );
}
