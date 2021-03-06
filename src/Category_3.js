import React, { Component } from 'react';
import { Bar } from './Bar';

class Category_3 extends Component {
    render() {
        return (
            <div className="Page">
                <Bar></Bar>
                <div className="Gallery_Page">
                        <div className="Gallery_Div_Image">
                            <img className="Gallery_Image" alt="Side L" src={require('./images/Category_3/3_1_1.png')}></img>
                        </div>
                        <div className="Gallery_Div_Image">
                            <img className="Gallery_Image" alt="Side R" src={require('./images/Category_3/3_1_2.png')}></img>
                        </div>
                </div>
            </div>
        );
    }
}

export { Category_3 };