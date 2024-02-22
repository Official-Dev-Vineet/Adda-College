import { useRouteError } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
export const ErrorDetails = () => {
  const error = useRouteError();
  return (
    <div
      className="abs-center w-full h-full"
      style={{ backgroundColor: "var(--secondary" }}
    >
      <div className="shadow-3d-light padding-md radius-1 tac  abs-center max-w flex flex-col align-center gap-sm">
        <BiErrorCircle size="5rem" />
        <p>Sorry, an unexpected error has occurred.</p>
        <strong className="block t-dander t-balance">
          {error.statusText || error.message}
        </strong>
      </div>
    </div>
  );
};
