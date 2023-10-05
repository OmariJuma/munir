import NoNet from "./../../assets/images/logos/net.png";

const NoInternet = () => {
  return (
    <>
      <span style={{ display: "flex", justifyContent: "center", alignContent:"center" }}>
        <img
          src={NoNet}
          style={{ width: "100px", height: "100px", alignContent: "center" }}
          alt="No internet"
        />
      </span>
      <p style={{textAlign: "center", display:"block" }}>Kindly check your internet connection and try again</p>

    </>
  );
};

export default NoInternet;
