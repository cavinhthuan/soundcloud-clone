import { Fragment, useEffect, useMemo, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
const defaultProps = {
  className: "relative inline-block text-left z-50 ",
};
export default function Dropdown(props) {
  // const [open, setOpen] = useState(false);
  const newTriggerProps = useMemo(() => {
    if (props.trigger?.props) {
      return { ...defaultProps, ...props.trigger.props };
    }
    return defaultProps;
  }, [props]);

  const openRef = (open) => {
    if (props.Items?.ref) {
      if (props.Items?.ref.current) {
        if(open) props.handleOpen();
        props.Items.ref.current.style.display = open ? "inline-block" : "none";
      }
    }
  };

  useEffect(() => {
    openRef(false);
  }, []);

  return (
    <Menu as="div" {...newTriggerProps}>
      {({ open }) => (
        <>
          <Menu.Button as={Fragment}>{props.trigger.target}</Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items {...props.Items?.props}>
              {props.children ?? openRef(open)}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
