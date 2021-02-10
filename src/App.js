import React, {useEffect} from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import './styles/App.css';
import WelcomePage from './components/WelcomePG';
import UserProfile from './components/ProfilePG';
import GamePage from './components/GamePG';
import CongratulationPage from './components/CongratsPG';
import RecordsPage from './components/RecordsPG';
import NotFound from './components/NotFoundPG';

function App() {
  const history = useHistory();
  useEffect(() => {
      history.push('/welcome')
  },[])

  return(
    <Switch>
      <Route path='/welcome' component={WelcomePage}/>
      <Route path='/profile' component={UserProfile}/>
      <Route path='/game' component={GamePage}/>
      <Route path='/congratulations' component={CongratulationPage}/>
      <Route path='/records' component={RecordsPage}/>
      <Route component={NotFound}/>
      <Redirect from="/" to="/welcome"/>
    </Switch>
  );
}

export default App;