export default function AdminComponent() {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-[530px] py-10 sm:py-16 md:py-[100px]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="mb-2 sm:mb-0">Годовая ставка</h1>
        <input
          type="number"
          className="w-20 rounded-2xl text-center mb-2 sm:mb-0"
        />
        <button className="border border-[#353637] hover:border-[#444b4b] w-40 rounded-2xl p-2">
          Установить
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <button className="border border-[#353637] hover:border-[#444b4b] w-40 rounded-2xl p-2 mb-2 sm:mb-0">
          Экспорт
        </button>
        <h1>Экспорт таблицы рефералов</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <button className="border border-[#353637] hover:border-[#444b4b] w-40 rounded-2xl p-2 mb-2 sm:mb-0">
          Старт/Стоп
        </button>
        <h1>Остановка стейкинга</h1>
      </div>
    </div>
  );
}
