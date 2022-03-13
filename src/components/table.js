import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import './table1.css'
import Tablerow from "./table1";

export default class TableData extends React.Component {
    constructor(props) {
              super(props);
              this.state = {
                  UserData: [],
                  SearchValue:'',
              };
              this.updateSate = this.updateSate.bind(this);
              this.handleTearmChange = this.handleTearmChange.bind(this);
    }
    
    updateSate () {
        axios.get(`https://randomuser.me/api/?results=${this.state.SearchValue}`).then((res)=>{
          this.setState({
            UserData: res.data.results,
          })
    
        })
   }
      handleTearmChange(e){
        let newTerm = e.target.value;
        console.log(newTerm)
        this.setState({SearchValue:newTerm})

      }
      

    render() {

        return (
              <div className="App">
                  <h3>
                    Enter the required number of users
                  </h3>
                  <div className="Inputtag">
                      <input type = 'number' value = {this.state.SearchValue} onChange={this.handleTearmChange}/>
                  </div>
              <div>
                  <Button className="buttontag" variant="success" onClick= {this.updateSate}> click here   </Button>
              </div>
                  <Tablerow userdata = {this.state.UserData} />
              </div>
        )
    }
}
