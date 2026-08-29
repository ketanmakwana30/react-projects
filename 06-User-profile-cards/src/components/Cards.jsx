const Cards = ({ name, img, profession, age, city }) => {
  return (
    <div className="rounded h-90 w-70 flex  items-center flex-col justify-evenly overflow-hidden bg-white ">
      <img className="h-20 w-20 border-2 rounded-full" src={img} alt={name} />
      <h1 className="font-bold text-3xl">{name}</h1>
      <h2 className="text-blue-600 text-xl">{profession}</h2>
      <h3 className="text-xl font-semibold">
        {age}, {city}
      </h3>
      <button className="px-4 py-2 outline-none border-none cursor-pointer rounded bg-blue-700 text-white font-semibold">
        Add Friends
      </button>
    </div>
  );
};

export default Cards;
