import {Form,Button} from "react-bootstrap";
import React from "react";
function BcForm(props) {
    return(<div>
            <Form>
                <Form.Control type="text" onChange={props.events2} placeholder="Enter Name" />
                <Button onClick={props.events1} variant="primary">Primary</Button>
            </Form>
        </div>
    );
}
export default BcForm