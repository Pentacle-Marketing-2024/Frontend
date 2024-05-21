import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Button, Input, MenuItem, TextField } from '@mui/material';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#07262e', color: 'white', textAlign: 'left', width: '100%' }}>
            <Box sx={{ display: { md: 'block', sm: 'none', xs:'none' } }}>
                <div style={{ display: 'flex', padding: '5rem 10rem 2rem 10rem' }}>
                    <div style={{ width: '60%' }}>
                        <h5 style={{ fontSize: '1.5rem', marginLeft: '2.5rem' }}>Dịch vụ</h5>

                        <ul style={{ listStyleType: 'none', marginTop: '-1rem', lineHeight: '2.3rem', width: '100%' }}>

                            <li style={{ width: '100%' }}><a>Bài đăng Facebook & Instagram</a></li>

                            <li><a>Thiết kế bộ nhận diện thương hiệu</a></li>

                            <li><a>Lập gian hàng sàn thương mại điện tử</a></li>

                            <li><a>Tăng tương tác</a>
                            </li>
                        </ul>
                    </div>

                    <div style={{ width: '40%', marginLeft: '10%' }}>
                        <h5 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Liên hệ</h5>

                        <p>Hotline: 0559466203</p>

                        <p>Email: pentaclemarketingservices@gmail.com</p>

                        <p>Facebook Page: <a style={{ color: 'white' }} href="https://www.facebook.com/pentaclemarketing"
                            onMouseEnter={(e) => { e.target.style.color = '#38b083'; e.target.style.textDecoration = 'none' }} onMouseLeave={(e) => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none' }}>https://www.facebook.com/pentaclemarketing</a></p>
                    </div>
                </div>
                <div style={{ padding: '0rem 10rem 2rem 10rem' }}>
                    <div style={{ borderTop: '0.01rem solid grey' }}>
                        <div style={{ marginLeft: '2.5rem', fontWeight: '300' }}>
                            <p>Copyright © 2024 Pentacle Marketing
                                <br />Design: <a style={{ color: 'white', textDecoration: 'none' }} rel="nofollow" href="https://www.tooplate.com/"
                                    target="_blank">Tooplate</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Box>

            <Box sx={{ display: { md: 'none', sm: 'block', xs:'block'} }}>
                <div style={{ display: 'block', padding: '5rem 5rem 2rem 5rem' }}>
                    <div style={{ width: '60%' }}>
                        <h5 style={{ fontSize: '1.5rem', marginLeft: '2.5rem' }}>Dịch vụ</h5>

                        <ul style={{ listStyleType: 'none', marginTop: '-1rem', lineHeight: '2.3rem', width: '100%' }}>

                            <li style={{ width: '100%' }}><a>Bài đăng Facebook & Instagram</a></li>

                            <li><a>Thiết kế bộ nhận diện thương hiệu</a></li>

                            <li><a>Lập gian hàng sàn thương mại điện tử</a></li>

                            <li><a>Tăng tương tác</a>
                            </li>
                        </ul>
                    </div>

                    <div style={{ width: '40%', marginLeft: '2.5rem' }}>
                        <h5 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Liên hệ</h5>

                        <p>Hotline: 0559466203</p>

                        <p>Email: pentaclemarketingservices@gmail.com</p>

                        <p>Facebook Page: <a style={{ color: 'white' }} href="https://www.facebook.com/pentaclemarketing"
                            onMouseEnter={(e) => { e.target.style.color = '#38b083'; e.target.style.textDecoration = 'none' }} onMouseLeave={(e) => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none' }}>https://www.facebook.com/pentaclemarketing</a></p>
                    </div>
                </div>
                <div style={{ padding: '0rem 5em 2rem 5rem' }}>
                    <div style={{ borderTop: '0.01rem solid grey' }}>
                        <div style={{ marginLeft: '2.5rem', fontWeight: '300' }}>
                            <p>Copyright © 2024 Pentacle Marketing
                                <br />Design: <a style={{ color: 'white', textDecoration: 'none' }} rel="nofollow" href="https://www.tooplate.com/"
                                    target="_blank">Tooplate</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </footer>
    );
}