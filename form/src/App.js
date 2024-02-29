import Dashbord from './Componant/Dashbord';
import Login from './Componant/Login';
import { useContext } from 'react'
import {AuthContext} from './Context/AuthContextProvider'

function App() {
  const {isAuth} = useContext(AuthContext)
  return (
    <div className="App">
      {isAuth ? <Dashbord/> : <Login/>}
    </div>
  );
}

export default App;
