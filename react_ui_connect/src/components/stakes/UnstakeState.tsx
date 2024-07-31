export default function UnstakeState() {
  return (
    <div className="p-10 h-[330px]">
      <h1 className="font-bold text-3xl">Доступно к выводу из стейкинга</h1>
      <p className="font-bold text-3xl mb-[125px]">N токенов</p>
      <button className=" border border-[#353637] hover:border-[#444b4b] w-full rounded-2xl">
        Unstake
      </button>
    </div>
  );
}
