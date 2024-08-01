export default function Banner() {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 pt-10 sm:pt-16 md:pt-20">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-[650px] mb-6 lg:mb-0">
          <h1 className="font-bold mb-4 text-3xl md:text-4xl lg:text-[42px]">
            Stake STON and receive rewards
          </h1>
          <p className="text-base md:text-lg">
            Stake your STON tokens, acquire DAO voting power with ARKENSTON, and
            receive GEMSTON, which can be transferred, traded, or held.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="/banner.png"
            alt="Banner Image"
            className="w-full max-w-xs lg:max-w-[352px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
