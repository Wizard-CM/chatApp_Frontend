import axios from "axios";
import Routes from "./Routes";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
