import React from 'react';
import ImageSlider from 'react-simple-image-slider';
import '../App.css';
import { Box } from '@mui/material';

function Slider() {
    const fadeImages = [
        {
            url: './microsoft-edge-FAaz8lkinzs-unsplash.jpg',
        },
        {
            url: './surface-1x5jnhtlp3Y-unsplash.jpg',
        },
        {
            url: './surface-71_s6RDJpGc-unsplash.jpg',
        },
    ];

    return (
        <div>
            <Box sx={{ width: '100%', display: { xs: 'none', md: 'flex' }, }}>
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

            <Box sx={{ width: '100%', display: { xs: 'flex', md: 'none' }, }}>
                <ImageSlider
                    images={fadeImages}
                    width={'100%'}
                    height={'20rem'}
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