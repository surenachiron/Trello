import Logout from "./Logout";

const Header = () => {
  return (
    <div className="sticky top-0 w-full py-2 bg-primary text-white rounded-b-lg container md:px-3">
      <div className="flex justify-between items-center w-full">
        <div className="w-6 h-6" />
        <div className="flex items-center gap-x-1">
          <img src="/useLogo.png" alt="trello logo" width={50} height={50} />
          <h2 className="font-bold text-lg">Trello</h2>
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default Header;
