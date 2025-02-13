import * as React from 'react';
import Box from '@mui/material/Box';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#07262e', color: 'white', textAlign: 'left', width: '100%' }}>
            <Box sx={{ display: { md: 'block', sm: 'none', xs:'none' } }}>
                <div style={{ display: 'flex', padding: '5rem 10rem 2rem 10rem' }}>
                    <div style={{ width: '60%' }}>
                        <h5 style={{ fontSize: '1.5rem', marginLeft: '2.5rem' }}>Dịch vụ</h5>

                        <ul style={{ listStyleType: 'none', marginTop: '-1rem', lineHeight: '2.3rem', width: '100%' }}>

                            <li style={{ width: '100%' }}>Bài đăng Facebook & Instagram</li>

                            <li>Thiết kế bộ nhận diện thương hiệu</li>

                            <li>Lập gian hàng sàn thương mại điện tử</li>

                            <li>Tăng tương tác</li>
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
                                <br />Design: <a style={{ color: 'white', textDecoration: 'none' }} href="https://www.tooplate.com/">Tooplate</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Box>

            <Box sx={{ display: { md: 'none', sm: 'block', xs:'none' } }}>
            <div style={{ display: 'block', padding: '5rem 5rem 2rem 5rem' }}>
                    <div style={{ width: '60%' }}>
                        <h5 style={{ fontSize: '1.5rem', marginLeft: '2.5rem' }}>Dịch vụ</h5>

                        <ul style={{ listStyleType: 'none', marginTop: '-1rem', lineHeight: '2.3rem', width: '100%' }}>

                            <li style={{ width: '100%' }}>Bài đăng Facebook & Instagram</li>

                            <li>Thiết kế bộ nhận diện thương hiệu</li>

                            <li>Lập gian hàng sàn thương mại điện tử</li>

                            <li>Tăng tương tác</li>
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
                            <br />Design: <a style={{ color: 'white', textDecoration: 'none' }} href="https://www.tooplate.com/">Tooplate</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Box>

            <Box sx={{ display: { md: 'none', sm: 'none', xs:'block'} }}>
                <div style={{ display: 'block', padding: '1rem 1rem 1rem 1rem' }}>
                    <div style={{ width: '100%' }}>
                        <h5 style={{ fontSize: '1.5rem', marginLeft: '1.5rem' }}>Dịch vụ</h5>

                        <ul style={{ listStyleType: 'none', marginTop: '-1rem', marginLeft: "-1rem", lineHeight: '2.3rem', width: '100%' }}>

                            <li style={{ width: '100%' }}>Bài đăng Facebook & Instagram</li>

                            <li>Thiết kế bộ nhận diện thương hiệu</li>

                            <li>Lập gian hàng sàn thương mại điện tử</li>

                            <li>Tăng tương tác</li>
                        </ul>
                    </div>

                    <div style={{ width: '100%', marginLeft: '1.5rem', marginRight: "1.5rem" }}>
                        <h5 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Liên hệ</h5>

                        <p>Hotline: 0559466203</p>

                        <p>Email: pentaclemarketingservices@gmail.com</p>

                        <p>Facebook Page: <a style={{ color: 'white' }} href="https://www.facebook.com/pentaclemarketing"
                            onMouseEnter={(e) => { e.target.style.color = '#38b083'; e.target.style.textDecoration = 'none' }} onMouseLeave={(e) => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none' }}>https://www.facebook.com/pentaclemarketing</a></p>
                    </div>
                </div>
                <div style={{ padding: '0rem 1em 1rem 1rem' }}>
                    <div style={{ borderTop: '0.01rem solid grey' }}>
                        <div style={{ marginLeft: '2.5rem', fontWeight: '300' }}>
                            <p>Copyright © 2024 Pentacle Marketing
                            <br />Design: <a style={{ color: 'white', textDecoration: 'none' }} href="https://www.tooplate.com/">Tooplate</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </footer>
    );
}