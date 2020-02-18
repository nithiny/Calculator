import React, {Component} from 'react';

class EquationComponent extends Component {


    render() {
        let {equation} = this.props;
        return (
            <div className="equation">
                <p>{equation}</p>
            </div>
    )
        ;
    }
}


export default EquationComponent;

