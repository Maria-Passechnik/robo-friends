import React, {useState, useEffect} from "react";
import Scroll from '../components/Scroll'
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';


const App = () =>  {
  const [ robots, setRobots  ] = useState([]);
  const [ searchfield, setSearchField] = useState('');

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {setRobots(users)});
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  
  const filterRobot = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ?
    <h1 className='tc'>Loading..</h1> :
      (
        <div className='tc'>
          <h1 className='f1 pa3'>Robo Friends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobot} />
            </ErrorBoundry>
          </Scroll>
          <Footer />
        </div>
      )
};

 export default App;