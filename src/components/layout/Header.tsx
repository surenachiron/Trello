import Logout from "./Logout";

const Header = () => {
  return (
    <div className="sticky top-0 w-full py-2 bg-primary text-white rounded-b-lg container md:px-3">
      <div className="flex justify-between items-center w-full">
        <div className="w-[25px] h-[25px]" />
        <h2 className="font-bold text-lg">Trello</h2>
        <Logout />
      </div>
    </div>
  );
};

export default Header;
