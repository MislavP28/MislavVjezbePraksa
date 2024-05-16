import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { DataForContext } from '../../../src/Pages/HomePage/HomePage';
import { ModalComponent } from '../Modal/ModalComponent';
import { TableRender } from './TableRender';
import "../../assets/CSS/table.scss";

function TableComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeRecord, setActiveRecord] = useState(null);  
    const {data, envID } = useContext(DataForContext);

    //Funkcija koja služi da DATA provede kroz .map i vratiti sav iskoristivi array za tablicu

const columns = [
  {
            title: 'ID',
            dataIndex: 'id',
            sorter: {compare: (a, b) => a.id - b.id},
            render: (text, record) => <Link to={"/" + record.serv_env + "/" + record.id}><span className='ID_render_status'>{text}</span></Link>
  },
  {
            title: 'Application ID',
            dataIndex: 'application_id',
            hidden: window.innerWidth >= 1080 ? false : true
  },
  {
            title: 'Server Name',
            dataIndex: 'name',
  },
  {
            title: 'Status',
            dataIndex: 'status',
            render: (text, record) => <>{record.status == 0 ? (<span className='inactive_status'> Inactive </span>) : (<span className='active_status'> Active </span>)}</>,
            align: "center"
}
];
    //Otvara modal i postavlja podatke(data) iz odabranog retka
    const showModal = (record) => {
        setActiveRecord(record);
        setIsModalOpen(true);
    };
  

    // Props šalje data za novi Array kojim se puni tablica, dodavanje key varijable zbog potrebe .map funkcije. Provjera postojanja svih potrebnih podataka.
    const newArray = envID && data &&
        data.map(item => ({
            id: item.id,
            application_id: item.application_id,
            name: item.name,
            description: item.description,
            date_created: item.date_created,
            status: item.status,
            admin: item.admin,
            ip: item.ip,
            key: item.id.toString(), // Dodan key radi .map funkcije
            serv_env: envID // keyFromDropdown bude prosljeđen u serverDetails radi lociranja na kojem se environmentu nalazi server 
        }))



    return (
      <>
          <TableRender 
          columns={columns} 
          dataSource={newArray}
          onRow={(record) => {
          return {
              onDoubleClick: () => {
                  showModal(record);
              }
          };
      }}
      />
        <ModalComponent
                activeRecord={activeRecord}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                title="Server details"
                text="Here you can view details about selected server. For further details click on the ID from the table content."
            />      
      
      
   </>
    )
}
export default TableComponent;