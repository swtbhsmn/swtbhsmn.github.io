import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', width: "200px" }}
            >
                <Tab label="DataGrokr Analytics Pvt. Ltd." sx={{ textTransform: "capitalize", justifyContent: 'flex-start' }}  {...a11yProps(0)} />
                <Tab label="DG Analytics Pvt. Ltd (Intern)" sx={{ textTransform: "capitalize" }}{...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography  sx={{ fontWeight: 700 }}>Software Engineer</Typography>
                <Typography variant="body2" >Bengaluru</Typography>
                <Typography variant="body2" >January 2022 - Present</Typography>
                <Typography sx={{ my: 1, fontWeight: 700 }}>Roles and Responsibility:</Typography>
                <Typography component="ul"  sx={{ ml: 2 }}>
                    <Typography component={"li"}>
                        Feature enhancement and possible optimizations.
                    </Typography>
                    <Typography component={"li"}>
                        Trouble shooting production issues.
                    </Typography>
                    <Typography component={"li"}>
                        Full-Stack Developer, responsible for delivering high quality product on time.
                    </Typography>
                    <Typography component={"li"}>
                        Daily Standup.
                    </Typography>
                    <Typography component={"li"}>
                        Handle releases.
                    </Typography>

                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography  sx={{ fontWeight: 700 }}>Software Engineer (Intern)</Typography>
                <Typography variant="body2" >Bengaluru</Typography>
                <Typography variant="body2" >July 2021 - December 2021</Typography>
                <Typography sx={{ my: 1, fontWeight: 700 }}>Roles and Responsibility:</Typography>
                <Typography component="ul" sx={{ ml: 2 }}>
                    <Typography component={"li"}>
                        Developed RESTful APIs in Express.js to enabling analytics teams to increase reporting speed.
                    </Typography>
                    <Typography component={"li"}>
                        Trouble shooting issues and exploring new technology.
                    </Typography>
                </Typography>
            </TabPanel>
        </Box>
    );
}
