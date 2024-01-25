import { Children } from "react";
import PropTypes from "prop-types";

function Each({ render, of }) {
  console.log(of);
  return Children.toArray(of.map((item, index) => render(item, index)));
}

Each.propTypes = {
  render: PropTypes.func.isRequired,
  of: PropTypes.array,
};
export default Each;
