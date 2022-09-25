import React from "react";
import barndImages from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="bg-base-100 shadow-lg bg-zinc-900">
      <div className=" navbar  w-[90%] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={barndImages} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-white">
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Orders</a>
            </li>
            <li>
              <a>Review</a>
            </li>
            <li tabIndex={0}>
              <a>
                Products
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 bg-zinc-900">
                <li>
                  <a>products 1</a>
                </li>
                <li>
                  <a>Products 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
