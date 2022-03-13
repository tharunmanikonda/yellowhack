import React from "react";
import { Table } from "react-bootstrap";
import './table1.css'

export default class Tablerow extends React.Component {

    render() {
        return(
        <div>
            <Table  hover  >
                <thead style={{color :'mediumseagreen'} }>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Picture</th>
                    </tr>
            </thead>
            <tbody style={{color:'rgb(127,39,48)'}}>
                {
                     this.props.userdata.map((items) =>{
                        return ( <tr key={ Math.random()}>
                <td>{items.name.first}</td>
                     <td>{items.name.last}</td>
                     <td>{items.gender}</td>
                     <td>{items.email}</td>
                     <td> <img src = {items.picture.medium} border={3} height={100} width={100} /></td>
            </tr>)})
                } 
                        </tbody>
        </Table>
        </div>
        )
    }
}
