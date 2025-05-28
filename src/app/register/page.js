"use client";
import React from 'react'

function registerPage() {

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,password)
    }
  return (
   <div>
        <h3>Register here</h3>
        <div className="card bg-base-100 w-[500px] mx-auto  shrink-0 shadow-2xl ">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
          <input name='name' type="text" className="input w-full" placeholder="Name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input w-full" placeholder="Password" />
          <div>
            <p>{`Don't`} have an account?<>signup</></p>

          </div>
          <button className="btn btn-primary mt-4">Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default registerPage