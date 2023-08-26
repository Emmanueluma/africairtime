import React, { useState } from 'react'
import Nav from './Nav/Nav'
import Main from './main/Main'
import History from './history/History'

const Dashboard = () => {
  const [router, setRouter] = useState('#home');
  const [paymentPassword, setpaymentPassword] = useState(1234);

  return (
    <main>
        <Nav router={router} setRouter={setRouter} />
        <Main router={router} paymentPassword={paymentPassword}/>
        <History />
    </main>
  )
}

export default Dashboard
