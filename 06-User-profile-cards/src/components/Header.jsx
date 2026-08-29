import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <div className="h-20 bg-black text-white w-full flex justify-between items-center px-10 py-5">
      <h1 className="font-black text-3xl">Profiles</h1>
      <HeaderLinks />
    </div>
  );
};

export default Header;
