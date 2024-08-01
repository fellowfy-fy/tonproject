export default function UnstakeState() {
  return (
    <div className="p-4 sm:p-6 md:p-10 h-auto">
      <h1 className="font-bold text-2xl sm:text-3xl mb-4">
        Доступно к выводу из стейкинга
      </h1>
      <p className="font-bold text-2xl sm:text-3xl mb-10 sm:mb-[125px]">
        N токенов
      </p>
      <button className="border border-[#353637] hover:border-[#444b4b] w-full rounded-2xl p-2 sm:p-4">
        Unstake
      </button>
    </div>
  );
}
