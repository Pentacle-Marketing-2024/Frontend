import Slider from './Slider';
import NavBar from './NavBar';
import { Box, Typography } from '@mui/material';

function Header() {
    return (
        <div>
            <Box sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '14rem',
                backgroundColor: 'rgba(161, 191, 233, 0.4)',
                zIndex: '1',
                display: { xs: 'flex', md: 'none', sm: "none" },
            }}></Box>

            <Box sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '22rem',
                backgroundColor: 'rgba(161, 191, 233, 0.4)',
                zIndex: '1',
                display: { xs: 'none', md: 'none', sm: "flex" },
            }}></Box>
            <Box sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '37.5rem',
                backgroundColor: 'rgba(161, 191, 233, 0.4)',
                zIndex: '1',
                display: { xs: 'none', md: 'flex', sm: "none" },
            }}></Box>
            
            <Slider />
            <Typography sx={{
                color:'white',
                zIndex: '2',
                fontSize:'4rem',
                width:'60%',
                textAlign:'left',
                position:'absolute',
                top:'12rem',
                left:'7rem',
                display: { xs: 'none', md: 'block', sm: "none" },
                fontWeight:'700',
                textShadow: "1px 1px 3px #000000"
            }}>Dịch vụ Marketing số cho doanh nghiệp của bạn</Typography>
            <Typography sx={{
                color:'white',
                zIndex: '2',
                fontSize:'2.5rem',
                width:'60%',
                textAlign:'left',
                position:'absolute',
                top:'8rem',
                left:'7rem',
                display: { xs: 'none', md: 'none', sm: "block" },
                fontWeight:'700',
                textShadow: "1px 1px 3px #000000"
            }}>Dịch vụ Marketing số cho doanh nghiệp của bạn</Typography>
            <Typography sx={{
                color:'white',
                zIndex: '2',
                fontSize:'1.5rem',
                width:'80%',
                textAlign:'left',
                position:'absolute',
                top:'5rem',
                left:'3rem',
                display: { xs: 'block', md: 'none', sm: "none" },
                fontWeight:'700',
                textShadow: "1px 1px 3px #000000"
            }}>Dịch vụ Marketing số cho doanh nghiệp của bạn</Typography>
            <NavBar />
        </div>
    );
}

export default Header;