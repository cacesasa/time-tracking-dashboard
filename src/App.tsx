import './App.css'
import ActivityCard from './components/activity-card/ActivityCard'
import UserCard from './components/user-card/UserCard'
import { useState } from 'react'

function App() {

  const [timePeriod, setTimePeriod] = useState('daily')

  return (
    <div className="App">
      <UserCard setTimePeriod={setTimePeriod}/>
      <div className="activityCardContainer">
        <ActivityCard timePeriod={timePeriod} />
      </div>
    </div>  
  )
}

export default App
