import React from 'react'
import './history.css'
import card from '../asset/Group 46.png'
import List1 from '../asset/list1.png'
import List2 from '../asset/list2.png'
import List3 from '../asset/list3.png'
import List4 from '../asset/list4.png'
import List5 from '../asset/list5.png'

const History = () => {
  const data = [
    {
      id: 1,
      image: List1,
      name: 'Netflix Standard Plan',
      date: '25 April at 09:30 am',
      price: 200
    },
    {
      id: 2,
      image: List2,
      name: 'Ps5 Game',
      date: '25 April at 09:30 am',
      price: 200
    },
    {
      id: 3,
      image: List3,
      name: 'Online Shopping',
      date: '25 April at 09:30 am',
      price: 200
    },
    {
      id: 4,
      image: List4,
      name: 'Theater Ticket',
      date: '25 April at 09:30 am',
      price: 200
    },
    {
      id: 5,
      image: List5,
      name: 'Wedding Photography',
      date: '25 April at 09:30 am',
      price: 200
    },
    {
      id: 2,
      image: List2,
      name: 'Ps5 Game',
      date: '25 April at 09:30 am',
      price: 200
    },
    {
      id: 3,
      image: List3,
      name: 'Online Shopping',
      date: '25 April at 09:30 am',
      price: 200
    },
    {
      id: 4,
      image: List4,
      name: 'Theater Ticket',
      date: '25 April at 09:30 am',
      price: 200
    },
    {
      id: 5,
      image: List5,
      name: 'Wedding Photography',
      date: '25 April at 09:30 am',
      price: 200
    },
  ]

  return (
    <section className='history'>
      <div className="twincard">
        <img src={card} alt="twin card" />
      </div>
      <div className="list">
        <div className='ju'>
          <h3>recent activities</h3>
          <p>see all</p>
        </div>
        <div className="list--item">
          {
            data.map(item => {
              return(
                <article>
                  <div className="contain">
                <img src={item.image} alt="" />
                <div>
                  <h5>{item.name}</h5>
                  <small>{item.date}</small>
                </div>
                  </div>
                <p>-N {item.price}</p>
              </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default History
