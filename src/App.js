import './App.css';
import { useRecoilState } from 'recoil';
import { websiteState } from './Recoil/atoms';
import { Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

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
        <h1> Passed landing page</h1>
      </div>
    )
  }
}

export default App;
