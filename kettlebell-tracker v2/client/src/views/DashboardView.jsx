import React from 'react'
import AddForm from '../components/AddForm'
import DataCard from '../components/DataCard'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import SMSForm from '../components/SMSForm';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chart from '../components/Chart';
import TinyBarChart from '../components/TinyBarChart';
import TestDrawer from '../components/TestDrawer';
import DataTable from '../components/DataTable';


//IMPORT: TWILIO
// const twilio = require('twilio');
// const client = require('twilio')(accountSid, authToken);
// const sendToNumber = '+19175579771';
// const messageBody = `Checking to see if a formatted string works. Here is the Twilio number ${phoneNumber}`;


function DashboardView() {
    // let today = new Date()
    return (
        <div>
            <div style={{ marginBottom: 10 }}>
                <TestDrawer />
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <DataTable />
                <AddForm />
            </div>


        </div>
    )
}

export default DashboardView