function Blur() {
  return (
    <div className="w-screen flex justify-between absolute -z-50 ">
      <div className="bg-violet-100 opacity-50 blur-3xl w-[600px] h-[600px] rounded-full absolute -left-60"></div>
      <div className="bg-blue-100 opacity-50 blur-3xl w-[600px] h-[600px] rounded-full absolute top-40 -right-60"></div>
    </div>
  );
}

export default Blur;
