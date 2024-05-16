import { DropdownComponent } from '../../components/Dropdown/Dropdown';
import TableComponent from '../../components/Table/Table';
import React, { useState} from 'react';
import { useFetch } from "../../Hooks/UseFetch.jsx";



export const DataForContext = React.createContext();

function HomePage() {
    const [envID, setEnvID] = useState(0);
    const URL = import.meta.env.VITE_API_URL;
    const DATA = useFetch(URL); //-Fetcha podatke sa danog URL-a
    //"https://raw.githubusercontent.com/AC-Hadzic/JSON-Fetch-Practice/main/data.json"
    // Handler funkcija za setEnvID
    const handleSetState = (data) => {
        setEnvID(data);
    };  
  console.log(URL);
  return (
    <>

        <DataForContext.Provider
                value={{
                    data: DATA,
                    setEnvID: handleSetState,
                    envID: envID,
                }}
            >

        {/* Oba childa dobivaju data iz fetcha. Dropdown dobiva set funkciju za vraćanje key-a iz selectane opcije. Isti key se šalje dalje u Table za prikaz. */}
        <DropdownComponent/>
        <TableComponent/>
        </DataForContext.Provider>
        
    </>
  )
}

export   { HomePage };