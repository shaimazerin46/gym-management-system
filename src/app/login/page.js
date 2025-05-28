import Link from 'next/link'
import React from 'react'

function loginPage() {
  return (
    <div>
        <h3>Login here</h3>
        <div className="card bg-base-100 w-[500px] mx-auto  shrink-0 shadow-2xl ">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div>
            <p>{`Don't`} have an account?<Link href='/register'>signup</Link></p>

          </div>
          <button className="btn btn-primary mt-4">Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default loginPage