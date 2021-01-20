import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />; // if logged in return this (welcome bck)
  }
  return <GuestGreeting />; // else if new return this
}

export default Greeting;
