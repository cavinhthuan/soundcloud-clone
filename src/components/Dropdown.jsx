import { Fragment, useMemo } from "react";
import { Menu, Transition } from "@headlessui/react";
const defaultProps = {
  className: "relative inline-block text-left z-50 ",
};
export default function Dropdown(props) {
  const newTriggerProps = useMemo(() => {
    if (props.trigger?.props) {
      return { ...defaultProps, ...props.trigger.props};
    }
    return defaultProps;
  }, [props]);
  console.log(newTriggerProps);
  return (
    <Menu as="div" {...newTriggerProps}>
      <Menu.Button as={Fragment} >{props.trigger.target}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items {...props.Items?.props}>{props.children}</Menu.Items>
      </Transition>
    </Menu>
  );
}
