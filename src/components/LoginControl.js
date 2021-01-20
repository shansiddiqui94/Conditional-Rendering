import { useState } from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LoginControl() {
  const [isLoggedIn, setIsLoggenIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggenIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggenIn(false);
  };

  let button; //

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }
  return (
    <div>
      <Greeting is isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default LoginControl;
