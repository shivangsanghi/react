import React from "react";
import {
    Link,
  } from "react-router-dom";
import("./Header.css");

export class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <nav>
                    <span className="item">
                        <Link to="/">Dashboard</Link>
                        </span>
                    <span className="item">
                        <Link to="/repository">Repository</Link>
                        </span>
                </nav>
            </header>
        );
    }
}