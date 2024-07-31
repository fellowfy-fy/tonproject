export default function Banner() {
  return (
    <div>
      <div className="mx-[200px] pt-[45px] flex justify-between">
        <div className="w-[650px]">
          <h1 className="font-bold mb-4 text-[42px]">
            Stake STON and receive rewards
          </h1>
          <p>
            Stake your STON tokens, acquire DAO voting power with ARKENSTON, and
            receive GEMSTON, which can be transferred, traded, or held.
          </p>
        </div>
        <div>
          <img
            src="/banner.png"
            alt="Banner Image"
            className="w-[352px] h-auto "
          />
        </div>
      </div>
    </div>
  );
}
