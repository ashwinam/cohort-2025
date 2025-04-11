import Logo from "./Heading";
import dp from "../assets/images/guogete-2cZC4trflVw-unsplash.jpg";

export default function FinalPage() {
  return (
    <div className="h-screen w-screen bg-white flex">
      <div className="sidebar bg-amber-300 w-[300px] px-3 py-5">
        <div className="flex flex-row justify-between items-center">
          <div className="bg-blue-400 rounded-md w-fit px-2 py-1">
            <Logo textSize="text-sm" />
          </div>
          <div>
          <img src={dp} className="h-[40px] w-[40px] object-cover rounded-md" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center my-3">
          <div className="home">Home</div>
          <div className="home">H</div>
          </div>
          <div className="flex flex-row justify-between items-center my-3">
          <div className="webinar">Webinar</div>
          <div className="webinar">W</div>
          </div>
          <div className="flex flex-row justify-between items-center my-3">
          <div className="billing">Billings</div>
          <div className="billing">B</div>
          </div>
          <div className="flex flex-row justify-between items-center my-3">
          <div className="user-management">User Management</div>
          <div className="user-management">UM</div>
          </div>
          <div className="flex flex-row justify-between items-center my-3">
          <div className="settings">Settings</div>
          <div className="settings">S</div>
          </div>
      </div>
      <div className="content bg-purple-300 px-3 py-5  w-full">Content</div>
    </div>
  );
}
