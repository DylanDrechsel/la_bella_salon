import './App.css';
import { useRecoilState } from 'recoil';
import { websiteState } from './Recoil/atoms';
import { Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Navigation from './Global/Navigation';
import Home from './Home/Home'
import About from './About/About'
import SalonEtiquette from './SalonEtiquette/SalonEtiquette';
import Spa from './Spa/Spa';
import Salon from './Salon/Salon';
import Team from './Team/Team';
import ContactUs from './ContactUs/ContactUs';

function App() {
  const [website, setWebite] = useRecoilState(websiteState)

  if (website === 'landing') {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navigation />

        <Route path='/' exact component={Home} />

        <Route path='/about' exact component={About} />

        <Route path='/salon-etiquette' exact component={SalonEtiquette} />

        <Route path='/spa' exact component={Spa} />

        <Route path='/salon' exact component={Salon} />

        <Route path='/team' exact component={Team} />

        <Route path='/contact' exact component={ContactUs} />
      </div>
    )
  }
}

export default App;
