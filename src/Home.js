import React, { Component } from 'react';
import { Bar } from './Bar';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Page">
                <Bar></Bar>
                <div className="Home_Component">
                    <h1>Lorem ipsum</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo lorem ac cursus sollicitudin. Aliquam posuere risus id metus tempor lacinia. Praesent finibus lacinia dolor, id cursus odio ornare quis. Sed nec quam non libero vulputate cursus. Fusce porta vehicula nulla. Quisque sodales massa eget condimentum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent varius, odio quis commodo iaculis, sapien neque tincidunt sapien, vitae cursus velit dolor eu diam. Phasellus vehicula nulla lacus, nec pulvinar tellus euismod non. Proin tempus massa vitae vehicula vestibulum. </h2>
                </div>
                <div className="About_Component">
                    <h1>Lorem ipsum</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo lorem ac cursus sollicitudin. Aliquam posuere risus id metus tempor lacinia. Praesent finibus lacinia dolor, id cursus odio ornare quis. Sed nec quam non libero vulputate cursus. Fusce porta vehicula nulla. Quisque sodales massa eget condimentum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent varius, odio quis commodo iaculis, sapien neque tincidunt sapien, vitae cursus velit dolor eu diam. Phasellus vehicula nulla lacus, nec pulvinar tellus euismod non. Proin tempus massa vitae vehicula vestibulum. </h2>
                    <Link to="/">
                        <label>Lorem ipsum →</label>
                    </Link>
                </div>
                <div className="Contact_Component">
                    <h1>Lorem ipsum</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo lorem ac cursus sollicitudin. Aliquam posuere risus id metus tempor lacinia. Praesent finibus lacinia dolor, id cursus odio ornare quis. Sed nec quam non libero vulputate cursus. Fusce porta vehicula nulla. Quisque sodales massa eget condimentum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent varius, odio quis commodo iaculis, sapien neque tincidunt sapien, vitae cursus velit dolor eu diam. Phasellus vehicula nulla lacus, nec pulvinar tellus euismod non. Proin tempus massa vitae vehicula vestibulum. </h2>
                </div>
            </div>
        );
    }
}

export { Home };