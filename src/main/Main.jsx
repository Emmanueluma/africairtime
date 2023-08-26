import './main.css'
import Searchlogo from '../asset/Search 2.png'
import notlogo from '../asset/Notification 3.png'
import profilepiclogo from '../asset/Ellipse.png'
import c1 from '../asset/Ellipse 17.png'
import c2 from '../asset/Ellipse 19.png'
import c3 from '../asset/Ellipse 20.png'
import c4 from '../asset/Ellipse 21.png'
import c5 from '../asset/Ellipse 46.png'
import thread from '../asset/Vector 7.png'
import rectangle from '../asset/Rectangle 86.png'
import cir from '../asset/arrow.png'
import cyc from '../asset/Ellipse 41.png'
import chat from '../asset/Union.png'
import { useEffect, useState } from 'react'
import { useRef } from 'react'


import {GiCancel} from 'react-icons/gi'
import {ImCheckboxChecked} from 'react-icons/im'


const Main = ({router, paymentPassword}) => {
  const color1 ={
    backgroundColor: '#fd4e19'
  }
  const color2 ={
    backgroundColor: '#ffbf2a'
  }
  const color3 ={
    backgroundColor: '#6aff79'
  }
  const color4 ={
    backgroundColor: '#214c63'
  }
  const data = [
    {
      id: 1,
      color: color1,
      name: 'online shoping',
      price: '1,132.50'
    },
    {
      id: 2,
      color: color2,
      name: 'Entertainments',
      price: '2,302.00'
    },
    {
      id: 1,
      color: color3,
      name: 'Car services',
      price: '1,090.70'
    },
    {
      id: 1,
      color: color4,
      name: 'Households',
      price: '2,007.30'
    },
  ]
  const numberRef = useRef();
  const amountRef = useRef();
  const passwordRef = useRef();
  const [formData, setFormData] = useState({
    number: "",
    amount: "",
    password: ""
  })
  const [active, setActive] = useState('') 
  const handleChange = (e) => {
    setFormData(prev => {
      return{
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  const init = () => {
    numberRef.current.style.borderColor = '#f66e407a';
    amountRef.current.style.borderColor = '#f66e407a';
  }
  const phoneNumber = formData.number;
  const amount = formData.amount;
  const handleSendAirtime = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-airtime", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, amount })
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error sending airtime:', error);
    }
  };
  let fail;
  const handleSubmit = (e) => {
    e.preventDefault();
    init();
    if(formData.number === '' && formData.amount == ''){
      numberRef.current.style.borderColor = 'red';
      amountRef.current.style.borderColor = 'red';
    }else if (formData.number === ''){
      numberRef.current.style.borderColor = 'red';
    }else if (formData.amount === ''){
      amountRef.current.style.borderColor = 'red';
    }else{
      if(formData.password == paymentPassword){
        passwordRef.current.style.borderColor = '#f66e407a';
        console.log('successful')
        fail = 'successful';
        setActive('active');
        handleSendAirtime();

        setTimeout(() => {
            setActive('')
            setFormData(
              {
                number: "",
                amount: "",
                password: ""
              }
            )
        }, 3000);

      } else{
        passwordRef.current.style.borderColor = 'red';
      }
    }
  }
  return (
    <section className="main">
      <div className="input">
        <div className='input-contain'>
          <img src={Searchlogo} alt="" />
          <input type="text" name="text" placeholder='Search for statics' />
        </div>
        <div className='not'>
          <img src={notlogo} alt="" />
          <div>
          <img className='profile' src={profilepiclogo} alt="" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="info">
          <img className='cir one' src={c4} alt="" />
          <article >
            <img src={c5} alt="" />
            <p>N 6 870</p>
            <small>total</small>
          </article>
          <img className='cir two' src={c3} alt="" />
          <img className='cir three' src={c2} alt="" />
          <img className='cir four' src={c1} alt="" />
        </div>
        <div className="grid">
          {
            data.map(item => {
              return(
                <article id={item.id}>
                  <div className='dot' style={item.color}></div>
                  <div>
                    <p>{item.name}</p>
                    <small>N {item.price}</small>
                  </div>
                </article>
              )
            })
          }
          
        </div>
      </div>
      <div className="statistic">
       {router === '#home' ? (
          <div className='stat'>
          <div className="header">
            <h3>statistic</h3>
            <p>spending</p>
          </div>
          <div className="sta">
            <img className='thread' src={thread} alt="" />
            <article className='rec'>
              <div>
                <img className='rect' src={rectangle} alt="" />
                <div className='arr'>
                  <article className=''>
                    <img src={chat} alt="" />
                    <p>N 6 870</p>
                  </ article>
                  <img className='' src={cir} alt="" />
                  <img className='' src={cir} alt="" />
                  <img className='' src={cir} alt="" />
                  <img className='' src={cir} alt="" />
                  <img className='' src={cyc} alt="" />
                  <img className='' src={cir} alt="" />
                  <img className='' src={cir} alt="" />
                </div>
              </div>
            </article>
            <div className='grid'>
            <p>april</p>
            <p>may</p>
            <p>jun</p>
            <p>jul</p>
            <p>aug</p>
            <p>sep</p>
            </div>
          </div>`
        </div>
       ): (
        <div className='payment-card' id='card'>
        <div className="header">
            <h3>payment</h3>
            <p>airtime</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input ref={numberRef} type="number" name="number" value={formData.number} onChange={handleChange} placeholder='input number'/>
            <input ref={amountRef} type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder='input amount' />
            <input ref={passwordRef} type="password" name="password" value={formData.password} onChange={handleChange} placeholder='paymet password' />
            <button>pay</button>
          </form>
          <article className={`tranMsg ${active}`}>
            { fail == 'fail' ? 
            <GiCancel className='icon cancel' /> :
            <ImCheckboxChecked className='icon check' />
            }
            <p>N {formData.amount}</p>
          </article>
        </div>
       )}
      </div>
    </section>
  )
}

export default Main
