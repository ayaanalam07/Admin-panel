import React from 'react'
import { FaBars } from 'react-icons/fa'

const Nabar = () => {
  return (
<>
<div className="navbar bg-green-400	 p-3">
  <div className="flex-1  lg:flex-none">
    <a className="font-bold text-2xl">Admin Panel</a>
  </div>
  <div className="flex flex-1 justify-end px-2">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn text-2xl"><FaBars />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
          <li><a>Admin Form</a></li>
          <li><a>Profile</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
</div>
</>
)
}

export default Nabar