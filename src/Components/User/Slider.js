import React from 'react';
import ImageSlider from 'react-simple-image-slider';
import '../../App.css';
import { Box } from '@mui/material';

function Slider() {
    const fadeImages = [
        {
            url: './slider.jpg',
        },
        {
            url: './webinar.png',
        },
        {
            url: './slider.jpg',
        },
    ];

    const small_fadeImages = [
        {
            url: './small_slider.jpg',
        },
        {
            url: './small_webinar.png',
        },
        {
            url: './small_slider.jpg',
        },
    ];

    return (
        <div>
            <Box sx={{ width: '100%', display: { xs: 'none', md: 'flex', sm: "none" }, }}>
                <ImageSlider
                    images={fadeImages}
                    width={'100%'}
                    height={'37.5rem'}
                    slideDuration={3}
                    autoPlay={true}
                    style={{ position: 'absolute', zIndex: '0' }}
                    showBullets={false}
                />
            </Box>

            <Box sx={{ width: '100%', display: { xs: 'none', md: 'none', sm: "flex" }}}>
                <ImageSlider
                    images={small_fadeImages}
                    width={'100%'}
                    height={'22rem'}
                    slideDuration={3}
                    autoPlay={true}
                    style={{ position: 'absolute', zIndex: '0' }}
                    showBullets={false}
                />
            </Box>

            <Box sx={{ width: '100%', display: { xs: 'flex', md: 'none', sm: "none" }}}>
                <ImageSlider
                    images={small_fadeImages}
                    width={'100%'}
                    height={'14rem'}
                    slideDuration={3}
                    autoPlay={true}
                    style={{ position: 'absolute', zIndex: '0' }}
                    showBullets={false}
                />
            </Box>
        </div>
    );
}

export default Slider;