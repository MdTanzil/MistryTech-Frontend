import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <p>this is admin</p>admin layout <Outlet />
    </div>
  );
};

export default Admin;
