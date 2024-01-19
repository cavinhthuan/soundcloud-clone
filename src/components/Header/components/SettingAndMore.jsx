import Dropdown from "components/Dropdown";
import { NavLink } from "react-router-dom";

const triggerSettingAndMore = (
  <div
    className="select-none visible [list-style:none] [font:0/0_a] [text-shadow:none] no-underline text-[#ccc] block box-border text-center h-[46px] w-[46px] border-[0] ml-0 p-0 bg-[url(https://a-v2.sndcdn.com/assets/images/more-0e9e752c.svg)] opacity-[.75] bg-no-repeat bg-center hover:opacity-100"
    role="button"
  >
    Settings and more
  </div>
);

const triggerSettingAndMoreOptions = [
  [
    { lable: "About us", url: "/pages/contact" },
    { lable: "Legal", url: "/terms-of-use" },
    { lable: "Copyright", url: "/pages/copyright" },
  ],
  [
    {
      lable: "Mobile app",
      url: "/download",
    },
    {
      lable: "For Creators",
      url: "https://creators.soundcloud.com",
    },
    {
      lable: "Blogs",
      url: "https://blog.soundcloud.com",
    },
    {
      lable: "Jobs",
      url: "https://soundcloud.com/jobs",
    },
    {
      lable: "Developers",
      url: "https://developers.soundcloud.com",
    },
  ],
  [
    {
      lable: "Support",
      url: "/support",
    },
    {
      lable: "Keyboard shortcuts",
      url: "/",
    },
  ],
  [
    {
      lable: "Subscription",
      url: "/you/subscriptions?ref=t2207",
    },
    {
      lable: "Settings",
      url: "/settings",
    },{
      lable: "Sign out",
      url: "/logout",
    }
  ],
];

export default function SettingAndMore(props) {
  return (
    <Dropdown
      trigger={{
        target: triggerSettingAndMore,
        props: { className: "relative h-[46px] w-[46px]" },
      }}
    >
      <div
        tabIndex={-1}
        className="outline-[none] w-[170px] min-h-[auto] fixed top-[45.9974px] left-[1210.6px]"
      >
        <div className="max-h-[667.6px] overflow-y-auto bg-[rgb(255,_255,_255)] border-[0.8px] border-t-0 [border-image:none_100%_/_1_/_0_stretch] rounded-tl-none rounded-br-[4px] rounded-tr-none rounded-bl-[4px] [font:700_12px_/_16.8px_Inter,_sans-serif] divide-y divide-gray-100">
          {triggerSettingAndMoreOptions?.map((group) => (
            <ul>
              {group?.map((option) => (
                <li>
                  <NavLink
                    to={option.url}
                    className="text-[rgb(51,_51,_51)] block px-[10px] py-[8px] items-center hover:bg-[#f2f2f2]"
                  >
                    {option.lable}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </Dropdown>
  );
}
