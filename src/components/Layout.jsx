import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <>
        <header className="bg-blue-500 text-black text-lg font-semibold underline underline-offset-2 gap-4 flex items-center">
            <Link to="/">Counter</Link>
            <Link to="/todo-list">Todo List</Link>
            <Link to="/contact">Contact </Link>
            <Link to="/github-app">Github App </Link>
     

        </header>

        <div>
            <Outlet/>
        </div>
    </>
  )
}
