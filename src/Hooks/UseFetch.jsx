  import { useEffect, useState } from "react";
  

  export function useFetch(URL) {
    const [data, setData] = useState([]);

  // Fetch podataka sa URL, kroz props šaljemo data childovima Dropdown i Table
 useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('The response is not OK :c');
                };
                const result = await response.json();
                // console.log("JSON received from Fetch:", result);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData(URL);
    }, [URL])
    return data;
};








            // Ovo ispod treba ako pristup JSON-u traži autorizaciju, githubov page je public :D

            //     , {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'X-Access-Key': '$2a$10$Pz0jsQh.XWuoTV8weiUMPOWdLldMMlzf0zOEs4aeApdTEU.QOzkQ2'
            //     }
            // }