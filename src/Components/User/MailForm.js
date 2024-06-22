import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, MenuItem, TextField } from '@mui/material';
import axios from "axios";
import Swal from "sweetalert2";

/*const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
}));*/

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
        value: 'Suggestion from friends/family',
        label: 'Giới thiệu từ bạn bè, người thân',
    },
];

export default function MailForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        method: "",
        description: ""
    });

    const [errors, setErrors] = useState({
        fullName: false,
        email: false,
        method: false,
        description: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (value.trim() === "") {
            setErrors({ ...errors, [name]: true });
        } else {
            setErrors({ ...errors, [name]: false });
        }
    };

    const handleSubmit = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;
        const newErrors = {};

        if (!emailRegex.test(formData.email)) {
            newErrors.email = true;
            valid = false;
        }

        Object.keys(formData).forEach((key) => {
            if (formData[key].trim() === "") {
                newErrors[key] = true;
                valid = false;
            }
        });

        if (valid) {
            try {
                await axios.post("https://pentaclemarketing.azurewebsites.net/api/form/create", formData);
                Swal.fire({
                    icon: "success",
                    title: "Thành công!",
                    text: "Gửi thành công"
                });
                // Optionally, clear form data after successful submission
                setFormData({
                    fullName: "",
                    email: "",
                    method: "",
                    description: ""
                });
                setErrors({
                    fullName: false,
                    email: false,
                    method: false,
                    description: false
                });
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Lỗi!",
                    text: "Gửi thất bại"
                });
                console.error("Error submitting form:", error);
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Thông tin không hợp lệ",
                text: "Vui lòng kiểm tra lại thông tin."
            });
            setErrors(newErrors);
        }
    };

    return (
        <div>
            <Box sx={{ width: '100%', display: { sm: 'none', md: 'block', xs: 'none' } }}>
                <Stack spacing='2%' direction="row" useFlexGap flexWrap="wrap" sx={{ margin: '10% 15% 5% 15%' }}>
                    <TextField sx={{ width: '26%', textAlign: 'left' }}
                        required
                        id="outlined-required"
                        label="Họ và Tên"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={errors.fullName}
                        helperText={errors.fullName && "Vui lòng điền họ và tên."}>
                    </TextField>
                    <TextField sx={{ width: '26%', textAlign: 'left' }}
                        required
                        id="outlined-required"
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        error={errors.email}
                        onChange={handleChange}
                        helperText={
                            (errors.email && formData.email.trim() === "") ? "Vui lòng điền email." :
                            (errors.email && !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) ? "Sai định dạng." :
                            null
                          }>
                    </TextField>
                    <TextField sx={{ width: '44%', textAlign: 'left' }}
                        id="outlined-select-currency"
                        select
                        required
                        label="Biết đến Pentacle Marketing qua?"
                        defaultValue=""
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                        error={errors.method}
                        helperText={errors.method && "Vui lòng chọn 1 phương thức."}>
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
                        label="Mô tả dự án của doanh nghiệp"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        error={errors.description}
                        helperText={errors.description && "Vui lòng điền mô tả về dự án của doanh nghiệp."}>
                    </TextField>
                    <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor:'#38b083', width:'100%', marginTop: '2%'}}>Gửi</Button>
                </Stack>
            </Box>

            <Box sx={{ width: '100%', display: { sm: 'block', md: 'none', xs: 'block' } }}>
                <Stack spacing='2%' direction="row" useFlexGap flexWrap="wrap" sx={{ margin: '10% 17% 5% 17%' }}>
                    <TextField sx={{ width: '100%', textAlign: 'left', marginTop: '2%' }}
                        required
                        id="outlined-required"
                        label="Họ và Tên"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={errors.fullName}
                        helperText={errors.fullName && "Vui lòng điền họ và tên."}>
                    </TextField>
                    <TextField sx={{ width: '100%', textAlign: 'left', marginTop: '2%' }}
                        required
                        id="outlined-required"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        helperText={errors.email && "Vui lòng điền email."}>
                    </TextField>
                    <TextField sx={{ width: '100%', textAlign: 'left', marginTop: '2%' }}
                        id="outlined-select-currency"
                        select
                        required
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                        label="Biết đến Pentacle Marketing qua?"
                        defaultValue=""
                        error={errors.method}
                        helperText={errors.method && "Vui lòng chọn 1 phương thức."}>
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
                        label="Mô tả dự án của doanh nghiệp"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        error={errors.description}
                        helperText={errors.description && "Vui lòng điền mô tả về dự án của doanh nghiệp."}>
                    </TextField>
                    <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor:'#38b083', width:'100%', marginTop: '2%'}}>Gửi</Button>
                </Stack>
            </Box>
        </div>
    );
}