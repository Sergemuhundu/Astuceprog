import React,{useState} from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import EditorScreen from './Editor/Editor';


const AdminDashboard=()=>{
    const [sidebarOpen, setSidebarOpen]=useState(false);
    const openSidebar=()=>{
        setSidebarOpen(true);
    }

    const closeSidebar=()=>{
        setSidebarOpen(false);
    }

    return(
        <div className="container">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            <Main />
        </div>
    )
}

export default AdminDashboard;