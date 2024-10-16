import { IoLogOutOutline } from "react-icons/io5";

const Logout = () => {
  function onLogOut() {
    localStorage.removeItem("token");
    return window.location.replace("/login");
  }

  return location.pathname !== "/login" ? (
    <div>
      <button className="rounded-full py-1" onClick={onLogOut}>
        <IoLogOutOutline size={25} />
      </button>
    </div>
  ) : (
    <div className="w-6 h-6"></div>
  );
};

export default Logout;
