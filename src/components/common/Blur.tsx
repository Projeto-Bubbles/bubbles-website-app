function Blur() {
  return (
    <div className="w-screen flex justify-between absolute -z-50 ">
      <div className="bg-violet-200 blur-[200px] w-[700px] h-[700px] rounded-full absolute -left-60"></div>
      <div className="bg-blue-100 blur-[200px] w-[700px] h-[700px] rounded-full absolute -right-60"></div>
    </div>
  );
}

export default Blur;
