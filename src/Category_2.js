import React, { Component } from 'react';
import { Bar } from './Bar';

class Category_2 extends Component {
    render() {
        return (
            <div className="Page">
                <Bar></Bar>
                <div className="Gallery_Page">
                    <div className="Gallery_Two_Images">
                        <div className="Gallery_Div_Image">
                            <img className="Gallery_Image" alt="Side L" src={require('./images/Category_1/1_1_1.png')}></img>
                        </div>
                        <div className="Gallery_Div_Image">
                            <img className="Gallery_Image" alt="Side R" src={require('./images/Category_1/1_1_2.png')}></img>
                        </div>
                    </div>
                    <div className="Gallery_Two_Images">
                        <div className="Gallery_Div_Image">
                            <img className="Gallery_Image" alt="Side L" src={require('./images/Category_1/1_2_1.png')}></img>
                        </div>
                        <div className="Gallery_Div_Image">
                            <img className="Gallery_Image" alt="Side R" src={require('./images/Category_1/1_2_2.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Category_2 };