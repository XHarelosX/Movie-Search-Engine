import { useState, useEffect } from "react";
import UserPage from "./Components/UserPage/UserPage";
import Modal from "./UI/Modal/Modal";
import ErrorModal from "./UI/Modal/Error/ErrorModal";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {

  const [modelIsOpen, setModelIsOpen] = useState<Boolean>(false);
  const [isLoggenIn, setIsLoggenIn] = useState<Boolean>(false);
  const [activeUsername, setActiveUsername] = useState<string | null >("");

  function logginChecker() {
    let user: string | null = sessionStorage.getItem("LoggedInUsername")
    if(user){
      setActiveUsername(() => { return user } )
      setIsLoggenIn(true);
    }
  }

  useEffect(() => { logginChecker() }, []);

  const loginHandler = ( e: React.MouseEvent<HTMLButtonElement>, username: string ) => {
    e.preventDefault();
    if(username.length < 6 || username.length > 16){
      toggleModelIsOpen();
    }
    else {
      sessionStorage.setItem("LoggedInUsername", username );
      setActiveUsername(username)
      setIsLoggenIn(true);
    }
  };

  const toggleModelIsOpen = () => {
    setModelIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="App">
      { modelIsOpen ? <Modal id={"overlay"}> <ErrorModal onButtonClick={toggleModelIsOpen}/> </Modal> : null }
      {!isLoggenIn ? <LoginForm onClick={loginHandler}/> : <UserPage username={activeUsername}/> }
    </div>
  );
}

export default App;
