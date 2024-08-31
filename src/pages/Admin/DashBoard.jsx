import Appbar from "../../components/Appbar";
import Balance from "../../components/Balance";
import User from "../../components/User";

function DashBoard() {
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance />
      </div>
      <User />
    </div>
  );
}

export default DashBoard;