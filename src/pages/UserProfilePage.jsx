import * as React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import avatar from '../assets/avatar.svg';
import { useSendOtpMutation } from '../features/auth/authApiSlice';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

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

function UserProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const [value, setValue] = React.useState(0);
  const [sendOtp,{isLoading}]=useSendOtpMutation()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  async function sendOtpCall() {
    try {
      let data = await sendOtp({ email: user.email }).unwrap()
      
    } catch (error) {
      
    }
 }
  return (
    <div className="w-full p-4">
      <div className="relative h-32  bg-[#9fa2f6] rounded-t-md">
        <div className="absolute h-32 w-32 bg-white left-1/2  top-full -translate-x-1/2 -translate-y-1/2 rounded-full border-solid  border-white p-1">
          {
            user?.profile ? (<img src={user.profile} className="rounded-full w-full object-cover" alt="" />) : (<img className="rounded-full w-full object-cover" src={avatar} alt="" />)
          }
        </div>

      </div>
      <div className="mt-16 ">
        <div className="flex  justify-center items-center ">
          <h1 className="font-bold text-lg">{ `${user?.firstName} ${user?.lastName}` }</h1>

        </div>
        <div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Email" {...a11yProps(0)} icon={<EmailIcon />} />
                <Tab label="Password" {...a11yProps(1)} icon={<EnhancedEncryptionIcon />} />
                <Tab label="Subscription" {...a11yProps(2)} icon={<CurrencyExchangeIcon />} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="flex flex-row items-center">
                <p>{user?.email}</p>
                <button className="bg-[#fbbaa4] p-2 w-28 ml-3 rounded-md cursor-pointer " onClick={sendOtpCall}> <span className="text-lg font-medium text-gray-600">verify</span></button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              coming soon
            </TabPanel>
          </Box>
        </div>

      </div>
    </div>
  );
}

export default UserProfilePage;
