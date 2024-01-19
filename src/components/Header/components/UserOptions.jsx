import Dropdown from "components/Dropdown";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const userOptionTrigger = (
  <div
    className="text-[rgb(204,_204,_204)] box-border float-left pl-[10px] pr-[28px] py-[12px] relative h-[46px] after:content-[''] after:absolute after:bg-[url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjhweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCA4IDUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjIuMiAoOTk4MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+RHJvcGRvd248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iVG9wLUJhciIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwNjYuMDAwMDAwLCAtNTQ1LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjA2Nyw1NDUuMDIyNzQ2IEwyMDY2LDU0Ni4wMjI3NDYgTDIwNjkuOTU0NzYsNTQ5Ljk3NzUxMSBMMjA3My45Nzc1MSw1NDUuOTU0NzY1IEwyMDcyLjk3NzUxLDU0NC45NTQ3NjUgTDIwNjkuOTU0NzYsNTQ3Ljk3NzUxMSBMMjA2Nyw1NDUuMDIyNzQ2IFoiIGlkPSJEcm9wZG93biIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)] after:top-[21px] after:right-[10px] after:h-[5px] after:bg-no-repeat after:w-[8px] after:h-[8px] after:opacity-[.75] hover:text-white hover:after:opacity-100"
    data-test-id="user-nav-btn"
    tabIndex={-1}
    aria-haspopup="true"
    role="button"
    aria-owns="dropdown-button-293"
  >
    <div className="h-[26px] w-[26px] block bg-none bg-auto bg-[0%_0%] rounded-[50%] text-center relative bg-repeat -mt-[2px] mr-0 float-left">
      <span
        className="bg-[url('https://i1.sndcdn.com/avatars-000554205804-ndw6rv-t120x120.jpg');] w-[26px] h-[26px] opacity-100 [transition:opacity_0.2s_linear_0s] block bg-cover bg-[50%_50%] rounded-[50%] [box-shadow:rgba(0,_0,_0,_0.1)_0px_0px_0px_1px_inset] text-center relative bg-no-repeat"
        aria-label="Thuận Gờm’s avatar"
        aria-role="img"
      />
    </div>
  </div>
);
const userOptions = [
  {
    icon: "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjEgMTEuODZjLS44MjUtLjQxOC0xLjI0My0xLjUzNi0xLjI0My0yLjMyIDAtLjQuMjY4LS43MzUuNTA3LTEuMDA3LjY0OC0uNzQzIDEuMTU0LTEuNjI0IDEuMTU0LTMuNTA3QzEyLjUxOCAyLjI1IDEwLjg1OCAxIDguOTg4IDFjLTEuODcgMC0zLjUzIDEuMjUtMy41MyA0LjAyNiAwIDEuODgzLjUwNSAyLjc2NCAxLjE1MyAzLjUwNy4yNC4yNzIuNTEuNjA3LjUxIDEuMDA2IDAgLjc4NC0uNDIgMS45MDItMS4yNDYgMi4zMi0xLjI0NC42My0zLjQyMyAxLjE2Ny00LjM2NSAxLjg4Qy4yNSAxNC42OTUgMCAxNyAwIDE3aDE4cy0uMjc3LTIuMzA2LTEuNTM0LTMuMjZjLS45NDItLjcxMy0zLjEyLTEuMjUtNC4zNjUtMS44OHoiLz4KPC9zdmc+Cg==)",
    lable: "Profile",
    to: "/",
  },
  {
    icon: "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjgwNSAzQzguNzg1IDMgOCA1LjM0NSA4IDUuMzQ1UzcuMjE0IDMgNS4xOTcgM0MzLjQ5NCAzIDEuNzQ4IDQuMDk2IDIuMDMgNi41MTRjLjM0NCAyLjk1MyA1LjcyNSA2LjQ4IDUuOTYzIDYuNDg3LjIzOC4wMSA1LjczOC0zLjcyIDUuOTg4LTYuNS4yMDgtMi4zLTEuNDczLTMuNS0zLjE3NS0zLjV6Ii8+Cjwvc3ZnPgo=)",
    lable: "Like",
    to: "/",
  },
  {
    icon: "url(https://a-v2.sndcdn.com/assets/images/stations-dark-9ffb9f94.svg)",
    lable: "Stations",
    to: "/",
  },
  {
    icon: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0xOC40IDE4LjVsMi41IDUgLjIuNUgyOGwtMi4xLTQuMy00LjEtMS41di0yLjVjMS4yLTEuMSAxLjgtMy4yIDEuOC01LjEgMC0yLjEtMi0zLjYtMy41LTMuNnMtMy41IDEuNi0zLjUgMy42YzAgMS45LjUgNCAxLjggNS4xdjIuNWgtLjFsLjEuM3oiLz4KICAgIDxwYXRoIGZpbGw9InJnYmEoNTEsNTEsNTEsLjcpIiBkPSJNMTcuNSAxOWwtNS0xLjh2LTNjMS40LTEuMiAyLTMuOCAyLTUuOSAwLTIuNC0yLjMtNC4zLTQtNC4zLTEuNyAwLTQgMS44LTQgNC4zIDAgMi4yLjYgNC43IDIgNS45djNsLTUgMS44TDEgMjRoMTlsLTIuNS01eiIvPgo8L3N2Zz4K)",
    lable: "Following",
    to: "/",
  },
  {
    icon: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0xOC40IDE4LjVsMi41IDUgLjIuNUgyOGwtMi4xLTQuMy00LjEtMS41di0yLjVjMS4yLTEuMSAxLjgtMy4yIDEuOC01LjEgMC0yLjEtMi0zLjYtMy41LTMuNnMtMy41IDEuNi0zLjUgMy42YzAgMS45LjUgNCAxLjggNS4xdjIuNWgtLjFsLjEuM3oiLz4KICAgIDxwYXRoIGZpbGw9InJnYmEoNTEsNTEsNTEsLjcpIiBkPSJNMTcuNSAxOWwtNS0xLjh2LTNjMS40LTEuMiAyLTMuOCAyLTUuOSAwLTIuNC0yLjMtNC4zLTQtNC4zLTEuNyAwLTQgMS44LTQgNC4zIDAgMi4yLjYgNC43IDIgNS45djNsLTUgMS44TDEgMjRoMTlsLTIuNS01eiIvPgo8L3N2Zz4K)",
    lable: "Who to follow",
    to: "/",
  },
  {
    icon: "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTggMTEuNzEzTDEyLjMyOCAxNWwtMS42NTYtNS4zMDhMMTUgNi40NzhIOS42OTJMOCAxIDYuMzA4IDYuNDc4SDFsNC4zMjggMy4yMTRMMy42NzIgMTV6IiAvPgo8L3N2Zz4K)",
    lable: "Try Next Pro",
    to: "/",
  },
  {
    icon: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOC42NjcgMnYxMkg3LjMzM1YyaDEuMzM0ek02IDR2OEg0LjY2N1Y0SDZ6bTUuMzMzIDEuMzMzdjUuMzM0SDEwVjUuMzMzaDEuMzMzem0tOCAxLjMzNHYyLjY2NkgyVjYuNjY3aDEuMzMzem0xMC42NjcgMHYyLjY2NmgtMS4zMzNWNi42NjdIMTR6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=)",
    lable: "Track",
    to: "/",
  },
  {
    icon: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE2IDEyIj4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0xLjYyIDEwaDEydjJoLTEydi0yem02LjUyNi03djZINy4wOTRWM2gtMS41OEw3LjYyIDBsMi4xMDUgM0g4LjE0NnptLTUuOTkgMS4yNTdsMi44NjcgNC4wOTYtLjg2Mi42MDMtMi44NjgtNC4wOTVMMCA1Ljc2NmwuMDAzLTMuNjY1IDMuNDQ2IDEuMjUtMS4yOTQuOTA2aC4wMDF6bTEyLjA1LjU4MmwtMi44NjggNC4wOTYtLjg2My0uNjA0IDIuODY4LTQuMDk2LTEuMjkzLS45MDUgMy40NDUtMS4yNS4wMDQgMy42NjUtMS4yOTMtLjkwNnoiLz4KPC9zdmc+Cg==)",
    lable: "Distribute",
    to: "/",
  },
];


export default function UserOptions(props) {
  useEffect(() => {
    const div = document.querySelector("#root > div > header > div > div.block.visible > div:nth-child(4)")
    console.log(window.findOverflowingChildrenRecursive(div));
  }, [])
  return (
    <Dropdown
      trigger={{
        target: userOptionTrigger,
      }}
      Items={{
        props: {
          className:
            "absolute left-0 top-[46px] [font:12px/1.4_Inter,sans-serif] text-[#333] outline-[none] w-[135px] min-h-[auto] text-xs",
        },
      }}
    >
      <div className=" text-[#333] [font:var(--typography-heading4-font)] font-[Inter,sans-serif] font-bold max-h-[calc(100vh-46px)] overflow-y-auto bg-[#fff] border-[1px] border-[solid] border-[#ccc] border-t-[0] rounded-none rounded-br-[4px] rounded-bl-[4px]">
        <ul>
          {userOptions.map((option, i) => {
            const Icon = option.icon; //icon for option
            return (
              <li className="relative " key={i} >
                <NavLink
                  className={
                    "font-[Inter,sans-serif] font-bold [list-style:none] items-center block px-[10px] py-[8px] no-underline text-[#333] relative pl-[33px] hover:bg-[#f2f2f2] notstyled"
                  }
                  to="/"
                >
                  <i
                    style={{
                      width: "34px",
                      height: "20px",
                      position: "absolute",
                      backgroundRepeat: "no-repeat",
                      left: "0px",
                      top: "5px",
                      backgroundImage: Icon,
                      backgroundSize: "14px",
                      backgroundPosition: "center 3px",
                      color: "#333",
                    }}
                  />
                  {option.lable}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </Dropdown>
  );
}
