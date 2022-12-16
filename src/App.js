import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import AllRoutes from './AllRouters/Allrouters';
import SignUp from './Pages/SignUpPage';
import { useEffect } from 'react'; 


function App() {

  useEffect(() => {
    document.title = 'Airtable';
  }, []);
  
  return (

    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
