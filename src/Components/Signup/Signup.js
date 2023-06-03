import React, { useReducer,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';

const reducer = (state,action)=>{
    switch (action.type) {
      case 'username': return {...state,username:action.payload}
      case 'email': return {...state,email:action.payload}
      case 'number': return {...state,number:action.payload}
      case 'password': return {...state,password:action.payload}
      default: return {...state}
    }
}
export default function Signup() {

  const [state, dispatch] = useReducer(reducer, '')
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit = e=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(state.email,state.password).then(result=>{
      result.user.updateProfile({displayName:state.username})
    })
    console.log(firebase);
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt='signup' src={Logo}></img>
        <form onSubmit={handleSubmit}> 
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            pattern='[A-Za-z]{3,}'
            value={state.username}
            onChange={(e)=>dispatch({
              type: 'username',
              payload: e.currentTarget.value,
            })}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={state.email}
            onChange={(e)=>dispatch({
              type: 'email',
              payload: e.currentTarget.value,
            })}            
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={state.number}
            onChange={(e)=>dispatch({
              type: 'number',
              payload: e.currentTarget.value,
            })}
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={state.password}
            onChange={(e)=>dispatch({
              type: 'password',
              payload: e.currentTarget.value,
            })}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/'>Login</a>
      </div>
    </div>
  );
}
