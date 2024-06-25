import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Typography} from '@mui/material';

/*const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));*/

export default function Product() {
    /*const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: 'none',
        borderRadius: '0',
        boxShadow: '0 0 0 0',
        height: '18rem',
    }));*/

    return (
        <div>
            <Box sx={{ width: '100%', minHeight: 829, display: { lg: 'block', xs: 'none', md: 'none', sm: 'none' } }}>
                <Typography sx={{ marginTop: '5rem', marginBottom: '2rem', textAlign: 'center', fontSize: '2.5rem', fontWeight: '700' }}>Sản phẩm của chúng tôi</Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Masonry columns={3} spacing={3} sx={{ width: '80rem' }}>
                        {itemData.map((item, index) => (
                            <div key={index}>
                                <img
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        borderRadius: 5,
                                        display: 'block',
                                        width: '100%',
                                        zIndex: 0,
                                        position: 'relative'
                                    }}
                                />
                                <Box sx={{
                                    width: '90%',
                                    minHeight: 'auto',
                                    backgroundColor: '#EEEEEE',
                                    borderRadius: 1.5,
                                    margin: '-33% 7% 14% 5%',
                                    zIndex: 1,
                                    position: 'relative',
                                    display: 'grid',
                                    boxShadow: '0rem 0.4rem 0rem 0rem #DEDEDE',
                                }}>
                                    <div style={{
                                        marginTop: '1rem',
                                        marginLeft: '1.5rem',
                                        height: 'auto',
                                        width: '70%',
                                        textAlign: 'left',
                                    }}>
                                        <span style={{
                                            height: '1rem',
                                            backgroundColor: 'white',
                                            borderRadius: 100,
                                            padding: '0.2rem 1rem 0.3rem 1rem',
                                            fontSize: '0.85rem',
                                            color: 'gray',
                                        }}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <div style={{
                                        margin: '0.5rem 1rem 2rem 1.5rem',
                                        height: '1.7rem',
                                        width: '90%',
                                        textAlign: 'left',
                                    }}>
                                        <Typography sx={{ fontSize: '1.35rem', fontWeight: '500', fontFamily: "sans-serif", lineHeight: "1.7rem" }}>{item.title}</Typography>
                                    </div>
                                </Box>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </Box>

            <Box sx={{ width: '100%', minHeight: 829, display: { lg: 'none', xs: 'none', md: 'block', sm: 'none' } }}>
                <Typography sx={{ marginTop: '5rem', marginBottom: '2rem', textAlign: 'center', fontSize: '2.5rem', fontWeight: '700' }}>Sản phẩm của chúng tôi</Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Masonry columns={3} spacing={3} sx={{ width: '80rem' }}>
                        {itemData.map((item, index) => (
                            <div key={index}>
                                <img
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        borderRadius: 5,
                                        display: 'block',
                                        width: '100%',
                                        zIndex: 0,
                                        position: 'relative'
                                    }}
                                />
                                <Box sx={{
                                    width: '90%',
                                    minHeight: 'auto',
                                    backgroundColor: '#EEEEEE',
                                    borderRadius: 1.5,
                                    margin: '-38% 7% 14% 5%',
                                    zIndex: 1,
                                    position: 'relative',
                                    display: 'grid',
                                    boxShadow: '0rem 0.4rem 0rem 0rem #DEDEDE',
                                }}>
                                    <div style={{
                                        marginTop: '1rem',
                                        marginLeft: '2rem',
                                        height: 'auto',
                                        width: '70%',
                                        textAlign: 'left',
                                    }}>
                                        <span style={{
                                            height: '1rem',
                                            backgroundColor: 'white',
                                            borderRadius: 100,
                                            padding: '0.2rem 1rem 0.3rem 1rem',
                                            fontSize: '0.85rem',
                                            color: 'gray',
                                        }}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <div style={{
                                        margin: '0.5rem 1rem 2rem 1.5rem',
                                        height: '1.7rem',
                                        width: '90%',
                                        textAlign: 'left',
                                    }}>
                                        <Typography sx={{ fontSize: '1.2rem', fontWeight: '500', fontFamily: "sans-serif", lineHeight: "1.5rem" }}>{item.title}</Typography>
                                    </div>
                                </Box>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </Box>

            <Box sx={{ width: '100%', minHeight: 829, display: { lg: 'none', xs: 'none', md: 'none', sm: 'block' } }}>
            <Typography sx={{ marginTop: '5rem', marginBottom: '2rem', textAlign: 'center', fontSize: '2.5rem', fontWeight: '700' }}>Sản phẩm của chúng tôi</Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Masonry columns={1} spacing={0} sx={{ width: '35rem' }}>
                        {itemData.map((item, index) => (
                            <div key={index}>
                                <img
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        borderRadius: 5,
                                        display: 'block',
                                        width: '100%',
                                        zIndex: 0,
                                        position: 'relative'
                                    }}
                                />
                                <Box sx={{
                                    width: '90%',
                                    minHeight: 'auto',
                                    backgroundColor: '#EEEEEE',
                                    borderRadius: 1.5,
                                    margin: '-23% 5% 20% 5%',
                                    zIndex: 1,
                                    position: 'relative',
                                    display: 'grid',
                                    boxShadow: '0rem 0.4rem 0rem 0rem #DEDEDE',
                                }}>
                                    <div style={{
                                        marginTop: '1.2rem',
                                        marginLeft: '1.5rem',
                                        height: 'auto',
                                        width: '70%',
                                        textAlign: 'left',
                                    }}>
                                        <span style={{
                                            height: '1rem',
                                            backgroundColor: 'white',
                                            borderRadius: 100,
                                            padding: '0.2rem 0.8rem 0.2rem 0.8rem',
                                            fontSize: '0.85rem',
                                            color: 'gray',
                                        }}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <div style={{
                                        margin: '0.6rem 0.5rem 0.5rem 1.5rem',
                                        height: '2rem',
                                        width: '90%',
                                        textAlign: 'left',
                                    }}>
                                        <Typography sx={{ fontSize: '1.35rem', fontFamily:"sans-serif", fontWeight:'500', fontFamily: "sans-serif", lineHeight: "1.5rem"  }}>{item.title}</Typography>
                                    </div>
                                </Box>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </Box>

            <Box sx={{ width: '100%', minHeight: 829, display: { lg: 'none', xs: 'block', sm: 'none', md: 'none' } }}>
                <Typography sx={{ marginTop: '5rem', marginBottom: '2rem', textAlign: 'center', fontSize: '2.5rem', fontWeight: '700' }}>Sản phẩm của chúng tôi</Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Masonry columns={1} spacing={0} sx={{ width: '35rem' }}>
                        {itemData.map((item, index) => (
                            <div key={index}>
                                <img
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        borderRadius: 5,
                                        display: 'block',
                                        width: '100%',
                                        zIndex: 0,
                                        position: 'relative'
                                    }}
                                />
                                <Box sx={{
                                    width: '90%',
                                    minHeight: 'auto',
                                    backgroundColor: '#EEEEEE',
                                    borderRadius: 1.5,
                                    margin: '-25% 5% 20% 5%',
                                    zIndex: 1,
                                    position: 'relative',
                                    display: 'grid',
                                    boxShadow: '0rem 0.4rem 0rem 0rem #DEDEDE',
                                }}>
                                    <div style={{
                                        marginTop: '1.2rem',
                                        marginLeft: '1.5rem',
                                        height: 'auto',
                                        width: '70%',
                                        textAlign: 'left',
                                    }}>
                                        <span style={{
                                            height: '1rem',
                                            backgroundColor: 'white',
                                            borderRadius: 100,
                                            padding: '0.2rem 0.8rem 0.2rem 0.8rem',
                                            fontSize: '0.85rem',
                                            color: 'gray',
                                        }}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <div style={{
                                        margin: '0.6rem 0.5rem 0.5rem 1.5rem',
                                        height: '2rem',
                                        width: '90%',
                                        textAlign: 'left',
                                    }}>
                                        <Typography sx={{ fontSize: '1.35rem', fontFamily:"sans-serif", fontWeight:'500', fontFamily: "sans-serif", lineHeight: "1.5rem"  }}>{item.title}</Typography>
                                    </div>
                                </Box>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </Box>
        </div>
    );
}

const itemData = [
    {
        img: './product1.png',
        title: 'Content facebook',
        type: 'Art Direction',
    },
    {
        img: './product3.png',
        type: 'Web Development',
        title: 'Content instagram',
    },
    {
        img: './product5.png',
        type: 'Photography',
        title: 'Tăng tương tác',
    },
    {
        img: './product4.png',
        type: 'Branding',
        title: 'Health',
    },
    {
        img: './product2.png',
        type: 'Design',
        title: 'Thiết kế nhận diện thương hiệu',
    },
];
