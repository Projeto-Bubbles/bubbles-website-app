function MoreBubbles() {
  return (
    <div className="w-screen flex justify-center items-center mb-32">
      <div className="w-3/4 flex justify-between items-center">
        <div className="w-[500px] flex flex-col gap-5">
          <h1 className="text-7xl w-[400px] leading-none text-zinc-700">
            Mais bolhas, mais diversão
          </h1>
          <p className="text-2xl leading-none text-zinc-700">
            Abra novas portas para a diversão com Bubbles. Quanto mais bolhas,
            mais aventuras aguardam. Conecte-se, explore e mergulhe em um
            universo de possibilidades!
          </p>
        </div>

        <div>
          <div className="w-96 h-96 bg-gradient-to-br from-blue-200/0 to-blue-300/30 rounded-full grid grid-cols-2 p-10">
            <div className="flex items-center justify-center">
              <img
                src="../src/assets/MoreBubbles/fun.jpg"
                alt="Divirta-se"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="../src/assets/MoreBubbles/cooking.jpg"
                alt="Divirta-se"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="../src/assets/MoreBubbles/cyclist.jpg"
                alt="Divirta-se"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="../src/assets/MoreBubbles/group.jpg"
                alt="Divirta-se"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreBubbles;
