import React from 'react';

class Interface extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            id: 0,
            car: '',
            cars: []
        }
    }

    render(){
        return (
            <div className="container">
                <div>
                    <div className="side-panel">
                        <h4>Cars in Database</h4>
                    </div>
                    <div className="main-panel">
                        <h3>Current car</h3>
                    </div>
                </div>
                <div className='bottom-panel'>
                    <form>
                       <small>To delete a car enter the id of the car and click on delete</small>
                        <input type="number" id="id" placeholder="Enter car ID" />
                        <delete>DELETE</delete>
                    </form>
                </div>
            </div>
        )
    }
}

export default Interface;