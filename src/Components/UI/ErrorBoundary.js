import React from "react";
import Error from "./../../assets/images/logos/error.gif"
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  //   componentDidCatch(error,errorInfo){

  //   }
  render() {
    if (this.state.hasError) {
      return (
        <>
                  <h6 className="text-center">
            An errror has occurred click here to go to{" "}
            <a href="/" style={{ color: "blue" }}>
              homepage
            </a>
          </h6>{" "}

        <img src={Error} alt="Something went wrong"/>
        <h6 className="text-center">
            An errror has occurred click here to go to{" "}
            <a href="/" style={{ color: "blue" }}>
              homepage
            </a>
          </h6>{" "}

        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
