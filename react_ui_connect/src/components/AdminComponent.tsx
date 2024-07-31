export default function AdminComponent() {
  return (
    <div className="mx-[530px] py-[100px]">
      <div className="flex justify-between">
        <h1>Годовая ставка</h1>
        <input type="number" className="w-20 rounded-2xl text-center" />
        <button className=" border border-[#353637] hover:border-[#444b4b] w-40 rounded-2xl">
          Установить
        </button>
      </div>
      <div className="flex justify-between">
        <button className=" border border-[#353637] hover:border-[#444b4b] w-40  rounded-2xl">
          Экспорт
        </button>
        <h1>Экспорт таблицы рефералов</h1>
      </div>
      <div className="flex  justify-between">
        <button className=" border border-[#353637] hover:border-[#444b4b] w-40 rounded-2xl">
          Старт/Стоп
        </button>
        <h1>Остановка стейкинга</h1>
      </div>
    </div>
  );
}
