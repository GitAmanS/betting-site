import React from 'react'
import { Navigate } from 'react-router-dom'
import BetsGrid from './BetsGrid'

const betsArray = [
  {
      teamOneName: "Team A",
      teamOneLogo: "team-a-logo.png",
      teamTwoName: "Team B",
      teamTwoLogo: "team-b-logo.png",
      closingTime: "2024-04-30 12:00 PM"
  },
  {
      teamOneName: "Team X",
      teamOneLogo: "team-x-logo.png",
      teamTwoName: "Team Y",
      teamTwoLogo: "team-y-logo.png",
      closingTime: "2024-05-01 03:00 PM"
  },
  {
      teamOneName: "Team Alpha",
      teamOneLogo: "team-alpha-logo.png",
      teamTwoName: "Team Omega",
      teamTwoLogo: "team-omega-logo.png",
      closingTime: "2024-05-02 10:00 AM"
  },
  // Add more bets as needed
];
const Dashboard = () => {
  return (
    <div className='text-3xl'>
      <BetsGrid bets={betsArray} />
    </div>

    

  )
}

export default Dashboard