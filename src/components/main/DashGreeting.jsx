import car_on_road from "../../assets/car_on_road.svg";
import { useLocation } from "react-router-dom";
import { GetUser } from "./getUser";

export function DashGreeting() {
  const user = GetUser();

  return (
    <div className="main__title">
      <img src={car_on_road} alt="car_on_road" />
      <div className="main__greeting">
        <h1>Hello </h1>
        <p>{user.user_name}</p>
        <p>Welcome to your admin dashboard</p>
      </div>
    </div>
  );
}
