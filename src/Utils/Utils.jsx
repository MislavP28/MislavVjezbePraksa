export const statusIndicator = (data, type) => {
    return (
        <>
            {/* Drugi parametar more biti 'small' za manji prikaz statusa */}
            {data == 0 ? (<span className={type == "small" ? 'inactive-status-short' : "inactive-status"}> Inactive </span>)
                : (<span className={type == "small" ? 'active-status-short' : "active-status"}> Active </span>)}
        </>
    )
};



    // Novi Array environmnenta za Dropdown s podacima dobivenih iz propsa, dodavanje key varijable zbog potrebe .map funkcije. Provjera postojanja podataka.
    export const dropdownDataParser = (data) => {
        const newData = data ?
            data.map(item => ({
                key: item.id.toString(),
                label: item.environment,
            })) :
        [{
            key: 0,
            label: "Loading data..."
        }]
        return newData
    };
