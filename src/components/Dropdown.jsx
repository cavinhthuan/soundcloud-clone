import { Fragment, useEffect, useMemo } from "react";
import { Menu, Transition } from "@headlessui/react";
const defaultProps = {
  className: "relative inline-block text-left z-50 ",
};
export default function Dropdown(props) {
  const newTriggerProps = useMemo(() => {
    if (props.trigger?.props) {
      return { ...defaultProps, ...props.trigger.props };
    }
    return defaultProps;
  }, [props]);

  useEffect(() => {
    toggleRef(false);
  }, []);

  const toggleRef = (open) => {
    if (props.Items?.ref?.current) {
      props.Items.ref.current.style.display = open ? "inline-block" : "none";
    }
    return null;
  };

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
              {toggleRef(open) ?? props.children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
