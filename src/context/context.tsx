import React, { createContext, useEffect, useState } from 'react'

export const Context : React.Context<any> = createContext(undefined);

interface Props {
    children : React.ReactNode
}

export interface Avaus {
  avaa : boolean;
  ohjeNro : number;
}

export const ContextProvider : React.FC<Props> = (props : Props) : React.ReactElement<Props> => {
    
    const [paketti, setPaketti] = useState<any>([])
    const [searchResults, setSearchResults] = useState<any>([])
    const [duplicates, setDuplicates] = useState<any>([]);

    const [avaus, setAvaus] = useState<Avaus>({
      avaa : false,
      ohjeNro : 0
    })

    useEffect(() => {
      setSearchResults([...searchResults])
    }, [searchResults])

    useEffect(() => {
      setDuplicates([...duplicates])
    }, [duplicates])
    

  return (
    <Context.Provider value={{
        paketti,
        setPaketti,
        searchResults,
        setSearchResults,
        duplicates,
        setDuplicates,
        avaus,
        setAvaus
    }}>
        {props.children}
    </Context.Provider>
  )
}
