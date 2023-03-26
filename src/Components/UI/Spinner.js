import Spin from "./../../assets/images/logos/spinner.gif";

const Spinner = () => {
  return (
    <span style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={Spin}
        style={{ width: "100px", height: "100px", alignContent: "center" }}
        alt="spinner gif"
      />
    </span>
  );
};

export default Spinner;
