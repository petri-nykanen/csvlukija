import React, { createContext, useState } from 'react'

export const Context : React.Context<any> = createContext(undefined);

interface Props {
    children : React.ReactNode
}

export const ContextProvider : React.FC<Props> = (props : Props) : React.ReactElement<Props> => {
    
    const [paketti, setPaketti] = useState<any>([])
    const [searchResults, setSearchResults] = useState<any>([])
    const [duplicates, setDuplicates] = useState<any>([]);

  return (
    <Context.Provider value={{
        paketti,
        setPaketti,
        searchResults,
        setSearchResults,
        duplicates,
        setDuplicates,
    }}>
        {props.children}
    </Context.Provider>
  )
}
