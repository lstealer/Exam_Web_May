import {Card} from "react-bootstrap";
import React from "react";
function BcCard(props) {
return(<div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>Job:</Card.Subtitle>
                <ul>
                    
                </ul>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    </div>
)
}
export default BcCard