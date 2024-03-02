import { useContext } from "react";
import RegisterAndLoginForm from "./Components/Authentication/RegisterAndLoginForm.jsx";
import Chat from "./Components/Pages/Chat.jsx";
import { UserContext } from "./Context/UserContext.jsx";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return <Chat />;
  }

  return <RegisterAndLoginForm />;
}
