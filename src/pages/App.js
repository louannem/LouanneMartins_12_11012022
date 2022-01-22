import '../utils/styles/App.css'
import { useContext } from 'react';
import { UserContext } from '../UserContext'; 
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Logo from '../assets/logo.svg'
import '../utils/styles/Header.css'

function App() {
  const user = useContext(UserContext)
  console.log(user.userId)
  return (
    <div className="App">
        <Header logo={Logo} />
        <div className="body-wrapper">
          <Footer />
          <Profile />
        </div>
    </div>
  );
}

export default App;
