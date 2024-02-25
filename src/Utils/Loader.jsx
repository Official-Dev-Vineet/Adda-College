import { DNA } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      className="loader flex align-center justify-center"
      style={{ height: "100vh" }}
    >
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
