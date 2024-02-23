import PropTypes from "prop-types";
import { memo } from "react";
// eslint-disable-next-line react/display-name
export const SearchInput = memo(({ type = "text" }) => {
  return (
    <>
      <input
        type={type}
        placeholder="Search here..."
        className={`input transition padding-sm radius-1 shadow-3d-light`}
      />
    </>
  );
});
SearchInput.propTypes = {
  type: PropTypes.string,
};
