import React from 'react'

export default function Login() {
  return (
    <form>
  <div className="mb-3">
    <label htmlFor="Username" className="form-label">UserName</label>
    <input type="name" className="form-control" id="name" aria-describedby="name"/>
    <div id="emailHelp" className="form-text">Please Enter Your Name</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
