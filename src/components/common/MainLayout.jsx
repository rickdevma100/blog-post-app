import React from 'react'
import SideNav from './SideNav'
import "./mainContent.style.css";
import Blog from '../blog/Blog';
import Comment from '../comment/Comment';

const MainLayout = () => {
  return (
    <div className="container-fluid">
        <div className="row content">
                <SideNav/>
                <div className="col-sm-9">
                    <Blog/>
                    <Comment/>
                </div>
        </div>
    </div>
  )
}

export default MainLayout
