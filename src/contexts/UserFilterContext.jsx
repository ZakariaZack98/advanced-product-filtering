import React, { createContext, useState } from 'react'
const UserFilterContext = createContext();
const UserFilterProvider = ({children}) => {
  const [userFilter, setUserFilter] = useState({
    chipSetManufacturer: [],
    brand: [],
    VRAM: [],
    memoryType: [],
    fanCount: [],
  })
  return (
    <UserFilterContext.Provider value={{userFilter, setUserFilter}}>
      {children}
    </UserFilterContext.Provider>
  )
}

export {UserFilterProvider, UserFilterContext}
