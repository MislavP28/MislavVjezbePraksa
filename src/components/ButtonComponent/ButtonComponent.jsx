import { Button } from "antd";
import { Link } from "react-router-dom";


function ButtonComponent({ to, text, ...rest }) {
    return (
        <div className="button-container">
            <Link to={to}>
                <Button className="button" type="primary" size="large" {...rest}>
                    <div>
                        {text}  
                    </div>
                </Button>
            </Link>
        </div>
    )
}

export { ButtonComponent };