import { Modal, Button, ConfigProvider } from "antd";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { DetailsComponent } from "../../Layout/LayoutComponents/DetailsComponent";
import "../../assets/CSS/modal.scss"
import { statusIndicator } from "../../Utils/Utils";

function ModalComponent ({activeRecord, isModalOpen, setIsModalOpen, title, text}){
    const handleOk = () => {
    setIsModalOpen(false);
};
    const handleCancel = () => {
    setIsModalOpen(false);
};

return(
    <ConfigProvider
        theme={{
            components: {
                Modal: {
                    borderRadiusLG: 25,
                },
                Button: {
                    borderRadius: 25,
                    paddingBlock: 20,
                    contentLineHeight: 0,
                    contentFontSize: 15
                }
            }
        }}
        >
        <Modal
            title={title} 
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}>

                <p> {text} </p>
                <div className='modal'>
                    <div>
                        <DetailsComponent title="Server name:" data={activeRecord?.name} />
                        <DetailsComponent title="Server created at:" data={activeRecord?.date_created} />
                        <DetailsComponent title="Server managed by:" data={activeRecord?.admin} />
                        <DetailsComponent title="Server description:" data={activeRecord?.description} />
                    </div>

                    <div>
                        <DetailsComponent title="Server ID:" data={activeRecord?.id} />
                        <DetailsComponent title="Server App ID:" data={activeRecord?.application_id} />
                        <DetailsComponent title="Server IP Adress:" data={activeRecord?.ip} />
                        <DetailsComponent title="Server status:" data={statusIndicator(activeRecord?.status, "small")} />
                    </div>
                </div>
        </Modal>
    </ConfigProvider>

    )
}

export {ModalComponent}