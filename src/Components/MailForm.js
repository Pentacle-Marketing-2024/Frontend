import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Button, Input, MenuItem, TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
}));

const currencies = [
    {
        value: 'Google',
        label: 'Tìm kiếm trên Google',
    },
    {
        value: 'Social Media',
        label: 'Mạng xã hội',
    },
    {
        value: 'Suggestion',
        label: 'Giới thiệu từ bạn bè, người thân',
    },
];

export default function MailForm() {
    return (
        <div>
            <Box sx={{ width: '100%', display: { sm: 'none', md: 'block', xs: 'none' } }}>
                <Stack spacing='2%' direction="row" useFlexGap flexWrap="wrap" sx={{ margin: '10% 15% 5% 15%' }}>
                    <TextField sx={{ width: '26%', textAlign: 'left' }}
                        required
                        id="outlined-required"
                        label="Họ và Tên">
                    </TextField>
                    <TextField sx={{ width: '26%', textAlign: 'left' }}
                        required
                        id="outlined-required"
                        label="Email">
                    </TextField>
                    <TextField sx={{ width: '44%', textAlign: 'left' }}
                        id="outlined-select-currency"
                        select
                        required
                        label="Biết đến Pentacle Marketing qua?"
                        defaultValue="">
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField sx={{ width: '100%', marginTop: '2%', textAlign: 'left' }}
                        id="filled-textarea"
                        multiline
                        rows={7}
                        label="Mô tả dự án của doanh nghiệp">
                    </TextField>
                    <Button variant="contained" sx={{ backgroundColor:'#38b083', width:'100%', marginTop: '2%'}}>Gửi</Button>
                </Stack>
            </Box>

            <Box sx={{ width: '100%', display: { sm: 'block', md: 'none', xs: 'block' } }}>
                <Stack spacing='2%' direction="row" useFlexGap flexWrap="wrap" sx={{ margin: '10% 17% 5% 17%' }}>
                    <TextField sx={{ width: '100%', textAlign: 'left', marginTop: '2%' }}
                        required
                        id="outlined-required"
                        label="Họ và Tên">
                    </TextField>
                    <TextField sx={{ width: '100%', textAlign: 'left', marginTop: '2%' }}
                        required
                        id="outlined-required"
                        label="Email">
                    </TextField>
                    <TextField sx={{ width: '100%', textAlign: 'left', marginTop: '2%' }}
                        id="outlined-select-currency"
                        select
                        required
                        label="Biết đến Pentacle Marketing qua?"
                        defaultValue="">
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField sx={{ width: '100%', marginTop: '2%', textAlign: 'left' }}
                        id="filled-textarea"
                        multiline
                        rows={7}
                        label="Mô tả dự án của doanh nghiệp">
                    </TextField>
                    <Button variant="contained" sx={{ backgroundColor:'#38b083', width:'100%', marginTop: '2%'}}>Gửi</Button>
                </Stack>
            </Box>
        </div>
    );
}