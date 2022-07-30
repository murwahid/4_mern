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

//test imports 
import { styled } from '@mui/material/styles';



//IMPORT: TWILIO
// const twilio = require('twilio');
// const client = require('twilio')(accountSid, authToken);
// const sendToNumber = '+19175579771';
// const messageBody = `Checking to see if a formatted string works. Here is the Twilio number ${phoneNumber}`;


function DashboardView() {
    // let today = new Date()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        // <div>
        //     <div style={{ marginBottom: 10 }}>
        //         <TestDrawer />
        //     </div>

        //     <div style={{ display: "flex", justifyContent: "space-between" }}>
        //         <DataTable />
        //         <AddForm />
        //     </div>
        //     </div>


        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item><DataTable/></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><AddForm/></Item>
                </Grid>
            </Grid>
        </Box>

    )
}

export default DashboardView