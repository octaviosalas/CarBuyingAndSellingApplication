import React from 'react'
import { useContext } from 'react'
import {UserContext} from "../store/usercontext"


const Buble = () => {

    const userCtx = useContext(UserContext)
  return (
    <div>
          <span className="badge badge-sm absolute right-2 top--10  text-white text-[9px] bg-stone-800 w-[20px] h-[20px]  indicator-item">{userCtx.userQuantityMessages}</span>
    </div>
  )
}

export default Buble
