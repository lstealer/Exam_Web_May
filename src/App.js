import React from 'react';
import './App.css';
import {Button, Card, Table} from "react-bootstrap";
import UniqueId from "react-html-id"
import BcForm from "./Component/BcForm"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row,Form} from "react-bootstrap";
import BcCard from "./Component/BcCard";

class App extends React.Component {
    constructor() {
        super();
        UniqueId.enableUniqueIds(this)
        this.state = {
            temp:"",
            styOption:[{background: "lightblue", color: "black"},{background: "white", color: "black"}],
            foods:[
                {
                    id:1,food:"Pizza",price:20,isHiding:false
                },
                {
                    id:2,food:"Burger",price:10,isHiding:false
                },
                {
                    id:3,food:"Coca",price:5,isHiding:false
                },
                {
                    id:4,food:"Chiken",price:25,isHiding:false
                },
            ]
        }
    }
    id=1
    counting=()=>{
      return  this.id++;
    }
    insertRecord = () => {
        const a=[...this.state.record]
        a.push({id:this.counting(),name:this.state.temp})
        this.setState({record:a})
        console.log(this.state)
    }
    updateRecord = (record) => {
        const a=Object.assign({},record)
        const test=this.state.foods.map((record)=>{
            if(record.id===a.id) {
                if(record.isHiding)record.isHiding=false;
                else record.isHiding=true;
                console.log(record.isHiding)
            }
            return record
        })
        this.setState({record: [...test]})
    }
    valueGetter=(event)=>{
        this.setState({temp:event.target.value})
    }
    comboAction=(event,id)=>{
      // if(event.target.value===1){
        //
        //     this.setState({})
        // }
    }
    hidingCheck=(record)=>{
        return record===true?0:1
    }
    render() {
        return (
            <div className="App">
                <Container>

                    <Row>
                        <Col xs={6} lg={6}>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Food</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.foods.map((record,index) => {
                                        return (
                                            <tr style={this.state.styOption[this.hidingCheck(record.isHiding)]} key={record.id}>
                                                <td>{record.id}</td>
                                                <td>{record.food}</td>
                                                <td>{record.price}</td>
                                                <td>
                                                    <Button  onClick={this.updateRecord.bind(this,record)} variant="dark">
                                                        Update
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )}
                                </tbody>
                            </Table></Col></Row>
                </Container>
            </div>
        );
    }
}

export default App;
