import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div className='admin'>
            <div className='admin-heading'>
                <h1>Welcome to Admin Dashboard</h1>
            </div>

            <div className='admin-body'>
            <spam>To return back to Kirali Jewellers <Link to="/">click here </Link></spam>
                </div>
        </div>
    )
}

export default Admin