import React, {useState} from 'react';
import { Table, Modal, Button } from 'antd';
import { Link } from 'react-router-dom';


// Kolumne tablice - ID, App.ID i Name
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

function TableComponent({keyFromDropdown, dataToTable}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeRecord, setActiveRecord] = useState(null);  

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

  

    // Props šalje data za novi Array kojim se puni tablica, dodavanje key varijable zbog potrebe .map funkcije. Provjera postojanja svih potrebnih podataka.
    const newArray = keyFromDropdown && dataToTable  &&
        dataToTable[keyFromDropdown].environments.map( item => ({
          id: item.id,
          application_id: item.application_id,
          name: item.name,
          description: item.description,
          date_created: item.date_created,
          status: item.status,
          admin: item.admin,
          ip: item.ip,
          key: item.id,
          serv_env: keyFromDropdown
        })) 

        function status_indicator() {
          return (
              <>
                  {activeRecord?.status == 0 ? (<span className='inactive_status_short'> Inactive </span>) : (<span className='active_status_short'> Active </span>)}         
              </>
          )
      }


    return (
      <>
          <Table 
          columns={columns} 
          dataSource={newArray}
          onRow={(record) => {
          return {
              onDoubleClick: () => {
                  showModal();
                  setActiveRecord(record);
              }
          };
      }}
      />       
      
      
      <Modal
      title="Server details" 
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
              Close window
          </Button>
      ]}>

      <p> Here you can view details about selected server. For further details click on the ID from the table content.</p>
      <div className='modal'>
          <div>
              <div>
                  <span>Server name: </span> <br /> {activeRecord?.name}
              </div>

              <div>
                  <span>Server created at: </span> <br /> {activeRecord?.date_created}
              </div>

              <div>
                  <span>Server managed by: </span> <br /> {activeRecord?.admin}  
              </div>

              <div>
                  <span>Server description: </span> <br /> {activeRecord?.description}    
              </div>                         
          </div>

          <div>
              <div>
                  <span>Server ID: </span> <br /> {activeRecord?.id}
                  </div>

              <div>
                  <span>Server App ID: </span> <br /> {activeRecord?.application_id}
              </div>

              <div>
                  <span>Server IP Adress: </span> <br /> {activeRecord?.ip}
              </div>

              <div>
                  <span>Server status: </span> <br /> {status_indicator()}
              </div>
          </div>                    
      </div>
  </Modal>
  </>
    )
}
export default TableComponent;