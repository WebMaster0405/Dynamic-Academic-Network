
import { useEffect, useState } from "react";
import { Styles } from "./styles";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Serve from "../../component/Whoarewe/Serve";
import Team from "../../component/Whoarewe/Team";
import Vision from "../../component/Whoarewe/Vision";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Who = () =>{
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Styles>
      <div className="d-flex" style={{position:'relative'}}>
        <Box sx={{ width: '100%'}}>
          <Box className="tab">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Who we serve" {...a11yProps(0)} />
              <Tab label="Team" {...a11yProps(1)} />
              <Tab label="Vision" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
             <Serve/>
          </TabPanel>
          <TabPanel value={value} index={1}>
             <Team/>
          </TabPanel>
          <TabPanel value={value} index={2}>
             <Vision/>
          </TabPanel>
        </Box>
        <div className="btn-position">
            <button className="read-more" variant="contained" color="primary" disableElevation>Contact Us</button>
        </div>
      </div>
    </Styles>
  );
}
export default Who;