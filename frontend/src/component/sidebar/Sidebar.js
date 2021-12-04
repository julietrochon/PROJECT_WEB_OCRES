import React from "react";
import "./sidebar.css";
import {
    LineStyle,
    Timeline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>

                        <Link to="/home2" className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Home 2
                            </li>
                        </Link>

                        <Link to="/beer" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Beer - API
                            </li>
                        </Link>

                        <Link to="/chart" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                chart
                            </li>
                        </Link>


                    </ul>
                </div>
            </div>
        </div>
    );
}