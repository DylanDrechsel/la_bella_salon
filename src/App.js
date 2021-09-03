import './App.css';
import { useRecoilState } from 'recoil';
import { websiteState } from './Recoil/atoms';
import { Route } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function App() {
  const [website, setWebite] = useRecoilState(websiteState)

  return (
    <div className="App">
      <Button style={{ width: '50px', backgrundColor: 'black' }}> TEST </Button>
    </div>
  );
}

export default App;
