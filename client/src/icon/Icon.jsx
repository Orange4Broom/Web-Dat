import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);

const Icon = ({ name, type, color }) => {
  return (
    <div className="icon">
      <FontAwesomeIcon icon={[type, name]} style={{ color: color }} />
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["fas", "fab"]).isRequired,
  color: PropTypes.string.isRequired,
};

export default Icon;
