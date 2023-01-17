import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import avatar from '../assets/avatar.svg';
import { useSendOtpMutation, useSubmitOtpMutation, useChangePasswordMutation } from '../features/auth/authApiSlice';
import { changeOtpStatus } from '../features/auth/authSlice';

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
const style = {
  color:"#9fa2f6"
}
 
function UserProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const [value, setValue] = React.useState(0);
  const [form, setForm] = React.useState(false);
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [reNewPasswords, setReNewPassword] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [sendOtp, { isLoading }] = useSendOtpMutation();
  const [submitOtp, { isLoading: otpLoading }] = useSubmitOtpMutation();
  const [changePassword]=useChangePasswordMutation()
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  async function sendOtpCall() {
    try {
      setForm(true);
      const data = await sendOtp({ email: user.email }).unwrap();
    } catch (error) {

    }
  }

  async function submitOtpCall() {
    // console.log(otpRef.current.value);
    try {
      await submitOtp({ otp }).unwrap();
      setForm(false);
      dispatch(changeOtpStatus());
      setOtp('');
    } catch (error) {
      toast.error(error.data.message);
    }
  }
  async function handlePassword() {
    try {
      if (newPassword === reNewPasswords) {
        await changePassword({ oldPassword, newPassword }).unwrap();
        toast.success("password changed");
        setOldPassword("");
        setNewPassword("");
        setReNewPassword("")
      } 
      else {
        toast.error("Incorrect password");
  
      }
    } catch (error) {
      toast.error(error.data.message);
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
          <Toaster 
        position="bottom-center" 
        reverseOrder={false}
      />
        </div>
        <div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                <Tab label="Email" sx={style} {...a11yProps(0)} icon={<EmailIcon/>} />
                <Tab label="Password" sx={style} {...a11yProps(1)} icon={<EnhancedEncryptionIcon  />} />
                <Tab label="Subscription" sx={style} {...a11yProps(2)} icon={<CurrencyExchangeIcon  />} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {
                form ? (
                  <div className="flex flex-row items-center">
                    <input type="text" onChange={(e) => setOtp(e.target.value)} autoFocus />
                    <button className="bg-[#7edd85] p-2 w-28 ml-3 rounded-md cursor-pointer " onClick={submitOtpCall}>
                      <span className="text-lg font-medium text-gray-600">Submit</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-row items-center">
                    <p>{user?.email}</p>
                    {
                        user?.otpVerify ? (<p className="p-2 pl-4"> verified</p>) : (
                          <button className="bg-[#fbbaa4] p-2 w-28 ml-3 rounded-md cursor-pointer " onClick={sendOtpCall}>
                            <span className="text-lg font-medium text-gray-600">verify</span>
                          </button>
                        )
                      }

                  </div>
                )
              }

            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="flex flex-col p-2 gap-3 w-full lg:w-1/3 md:w-2/3">
                <TextField value={oldPassword} id="outlined-basic" label="Old password" variant="outlined" onChange={(e) => { setOldPassword(e.target.value) }} type="password" />

                <TextField value={newPassword} id="outlined-basic" label="New Password" variant="outlined" onChange={(e) => setNewPassword(e.target.value)} type="password" />

                <TextField value={reNewPasswords} id="outlined-basic" label="Re- New Password" variant="outlined" onChange={(e) => setReNewPassword(e.target.value)} />
                <div className="flex gap-5">
                <button className=" w-7/12 h-10 cursor-pointer text-[#9fa2f6] rounded-md border-2 border-[#9fa2f6] hover:bg-[#9fa2f6] hover:text-white transition-all" onClick={handlePassword}>
              Change Password
                  </button>
                  <Link to="/forgot" className="text-sm font-medium text-[#8F92F6] hover:text-[#8F92F6]">
                      Forgot your password?
                    </Link>

                </div>
                
              </div>
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
