import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <RotatingLines
        visible={true}
        height="30"
        width="30"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
