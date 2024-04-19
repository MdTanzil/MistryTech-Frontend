import { Outlet } from "react-router-dom";
import AdminSidebar from "../componentes/admin/AdminSidebar";

const Admin = () => {
  return (
    <div className="grid grid-cols-12 gap-2 container mx-auto">
      <div className="col-span-2">
        <AdminSidebar />
      </div>
      <div className="col-span-10">
        {" "}
        <Outlet />{" "}
      </div>
      {/* <p>this is admin</p>admin layout <Outlet /> */}
    </div>
  );
};

export default Admin;
