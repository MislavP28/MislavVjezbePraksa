import React, { useContext, useEffect, useState } from 'react';
import { DataForContext } from '../../Pages/HomePage/HomePage';
import { DropdownRender } from './DropdownRender';
import { dropdownDataParser } from '../../../src/Utils/Utils';
import "./../../assets/CSS/dropdown.scss"

function DropdownComponent() {
    const [selectedEnv, setSelectedEnv] = useState("");
    const { data, setEnvID } = useContext(DataForContext);

    // Funkcija vraća Dropdownu iskoristiv array od data
    const items = dropdownDataParser(data)

    // useEffect poziva update funkciju i postavlja početnu tablicu na Production Environment
    useEffect(() => {
        data.length > 0 &&
            updateSelectedEnv(items[0].key, items[0].label);
    }, [data])

    // Handler funkcija za onClick koja poziva da se funkcija ažurira
    const handleSelectedEnv = (item) => {
        updateSelectedEnv(item.key, items[item.key].label);
       
    };

    //Funkcija koja nam služi za postavljanje Enviroment Keya koji je potreban za tablicu(TABLE) i labela koji nam služi za prikaz u Dropdown menuu
    const updateSelectedEnv = (key, label) => {
        setSelectedEnv("Selected: " + label);
        setEnvID(key);
    };


    return (
        <DropdownRender
            menu={{
                items,
                selectable: true,
                onClick: handleSelectedEnv,
                defaultSelectedKeys: "0",
            }}
            selectedEnv={selectedEnv}
        />
    )
}

export { DropdownComponent };