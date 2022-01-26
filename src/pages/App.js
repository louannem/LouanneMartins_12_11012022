import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Logo from '../assets/logo.svg'
import '../utils/styles/Header.css'

function App() {
  return (
    <div className="App">
        <Header logo={Logo} />
        <div className="body-wrapper">
          <Sidebar credits="Copyright, SportSee 2020" />
          <Dashboard secondTitle="Félicitation ! Vous avez explosé vos objectifs hier 👏" />
        </div>
    </div>
  );
}

export default App;
