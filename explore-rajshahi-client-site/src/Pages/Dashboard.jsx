import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Title from '../Components/Title'
import gif from '../assets/welcome.gif'

const Dashboard = () => {
    return (
        <div>
            <Title children={"Dashboard Home"}></Title>
            <img src={gif} alt="" />
        </div>
    )
}

export default Dashboard