import Link from 'next/link';
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-green-400 p-3">
        <div className="flex-1 lg:flex-none">
          <Link href={'/'} className="font-bold text-2xl">Admin Panel</Link>
        </div>
        <div className="flex flex-1 justify-end px-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn text-2xl">
              <FaBars />
            </div>
            <ul
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                <Link href={"register"}>
                  Register
                </Link>
              </li>
              <li>
                <Link href={"login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link href={"adminForm"}>
                  Admin Form
                </Link>
              </li>
              <li>
                <Link href={"profile"}>
                  Profile
                </Link>
              </li>
              <li>
                <Link href={"login"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
