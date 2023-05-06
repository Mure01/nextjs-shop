import React, {createContext, useContext, useState, useEffect  } from 'react'

const Context = createContext()

const StateContext = ({children}) => {
    const [broj, setBroj] = useState(2)
  return (
    <div>
      <Context.Provider
      value={{
        broj,
        setBroj,
      }}
      >
        {children}
      </Context.Provider>
    </div>
  )
}

export default StateContext
export const useStateContext = () => useContext(Context)
