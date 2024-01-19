import Dropdown from "components/Dropdown";
import { NavLink } from "react-router-dom";

const notificationTrigger = (
  <div
    className="text-[rgb(204,_204,_204)] w-[46px] p-0 h-[46px] box-border float-left "
    tabIndex={0}
    aria-haspopup="true"
    role="button"
    aria-owns="dropdown-button-291"
  >
    <div className="w-full h-[46px] relative before:content-[''] before:bg-[url(https://a-v2.sndcdn.com/assets/images/activities-66caaa5e.svg)] before:bg-no-repeat before:bg-center before:absolute before:w-full before:h-full before:left-[0] before:top-[0] before:opacity-[.75] hover:before:opacity-100">
      {" "}
      <span className="border-[0px] border-[none] border-[rgba(0,0,0,0)] [font:0px_/_0px_a] [text-shadow:none] text-[rgba(0,_0,_0,_0)] bg-[rgba(0,_0,_0,_0)]">
        Notifications
      </span>{" "}
      <span className="right-[15px] w-[7px] h-[7px] top-[12px] absolute">
        <span className="block w-full h-[7px] rounded-[50%]" />{" "}
      </span>{" "}
    </div>
  </div>
);

export default function Notifications(props) {
  return (
    <Dropdown trigger={{target:notificationTrigger}} Items={{props:{ className: "absolute" }}}>
      <div className="text-[#333] cursor-auto outline-[none] w-[400px] min-h-[auto] fixed top-[45.9975px] left-[989.6px]">
        <div className="text-[#333] bg-[#fff] border-[1px] border-[solid] border-[#ccc] border-t-[0] rounded-none rounded-br-[4px] rounded-bl-[4px]">
          <div className="border-b   border-b-[#f2f2f2]">
            <div className="text-[#333] flex justify-between items-center px-[16px] py-[8px]">
              <h2 className="font-[Inter,sans-serif]  text-[#333] font-[Inter,sans-serif] font-normal mx-[0] mb-[0] leading-[1.3] text-[16px] mt-0">
                Notifications
              </h2>
              <div className=" text-[#333] cursor-auto ">
                <NavLink
                  className="[font:12px/1.4_Inter,sans-serif] no-underline inline-block px-[16px] py-[10px] -mx-[16px] -my-[10px] text-[#999] notstyle"
                  href="/settings/notifications"
                >
                  Settings
                </NavLink>
              </div>
            </div>
          </div>
          <div className="[font:12px/1.4_Inter,sans-serif] text-[#333]">
            <div className="text-[#999] flex flex-col justify-center items-center p-[16px]">
              No notifications
            </div>
          </div>
          <NavLink
            className="[font:12px/1.4_Inter,sans-serif] no-underline block text-center text-[#333] px-[16px] py-[10px]"
            to="/notifications"
          >
            View all notifications
          </NavLink>
        </div>
      </div>
    </Dropdown>
  );
}
