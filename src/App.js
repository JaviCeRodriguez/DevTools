import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/common/Card';
import { Button } from 'react-bootstrap';

const dataUser = [
  {
    title: "Coso",
    description: "Test",
  },
  {
    title: "Cosito",
    description: "Test",
  },
  {
    title: "Socotroco",
    description: "Test",
  },
];

function App() {
  const [ yellow, setYellow ] = useState(false)

  const handleClick = () => setYellow(!yellow)

  return (
    <div className="App">
      <Button variant="primary" onClick={handleClick}>Click Me!</Button>
      {
        dataUser.map((data) => {
          return (
            <Card title={data.title} description={data.title} isStyle={yellow} />
          )
        })
      }
    </div>
  );
}

export default App;
