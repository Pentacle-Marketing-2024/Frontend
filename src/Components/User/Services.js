import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function Services() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: 'none',
        borderRadius: '0',
        boxShadow: '0 0 0 0',
        height: '18rem',
    }));

    return (
        <div style={{ backgroundColor: '#F7F7F7' }}>
            <Box sx={{ marginTop: '25rem', display: { xs: 'none', md: 'block' }, marginLeft: '5%', marginRight: '5%', height: '73rem', padding: '2rem 0rem 2rem 0rem' }}>
                <p style={{ textAlign: 'center', fontSize: '1.35rem' }}>“Pentacle Marketing xây dựng sự hiện diện trên nền tảng số thông qua các hoạt động marketing thu hút, nội dung chất lượng cao và các giải pháp dễ tiếp cận với khách hàng doanh nghiệp.”</p>
                <h1 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Dịch vụ của chúng tôi</h1>
                <div style={{ marginTop: '1rem', textAlign: 'left', display: 'inline-block', width: '100%' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <Item sx={{ backgroundColor: '#1476FF', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'auto' }}>
                                <img src="./blue 1.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ margin: '1rem ' }}>
                                    <Typography sx={{ color: 'black', fontSize: '1.9rem', fontWeight: '700', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '2.3rem', marginBottom: '1rem' }}>
                                        Dịch vụ thiết kế nhận diện thương hiệu
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.08rem', fontFamily: 'Arial, Helvetica, sans-serif' }} >
                                        Thiết kế bộ nhận diện thương hiệu như Logo, Brochure, Banner, Profile… và các ấn phẩm đáp ứng các nhu cầu của quý doanh nghiệp
                                    </Typography>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ backgroundColor: '#F9C400', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'auto' }}>
                                <img src="./yellow 1.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>

                        <Grid item xs={4}>
                            <Item sx={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ margin: '1rem ' }}>
                                    <Typography sx={{ color: 'black', fontSize: '1.9rem', fontWeight: '700', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '2.3rem' }}>
                                        Dịch vụ bài đăng Facebook và Instagram
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.08rem', fontFamily: 'Arial, Helvetica, sans-serif' }} >
                                        Viết bài quảng cáo, bài PR, bài chia sẻ kiến thức, bài giới thiệu sản phẩm/dịch vụ thu hút khách hàng trên nền tảng Facebook và Instagram
                                    </Typography>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ backgroundColor: '#00985C', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'auto' }}>
                                <img src="./green 1.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ margin: '1rem ' }}>
                                    <Typography sx={{ color: 'black', fontSize: '1.9rem', fontWeight: '700', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '2.3rem' }}>
                                        Dịch vụ lập gian hàng thương mại điện tử
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.08rem', fontFamily: 'Arial, Helvetica, sans-serif', }} >
                                        Lập gian hàng thương mại điện tử: Tạo gian hàng trên các sàn thương mại điện tử như Shopee, Lazada...; thiết kế hình ảnh, khung thương hiệu, banner trên các sàn và viết mô tả sản phẩm rõ ràng, chi tiết
                                    </Typography>
                                </div>
                            </Item>
                        </Grid>

                        <Grid item xs={4}>
                            <Item sx={{ backgroundColor: '#F9C400', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'auto' }}>
                                <img src="./yellow 2.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ margin: '1rem ' }}>
                                    <Typography sx={{ color: 'black', fontSize: '1.9rem', fontWeight: '700', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '2.3rem' }}>
                                        Dịch vụ tăng tương tác
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.08rem', fontFamily: 'Arial, Helvetica, sans-serif' }} >
                                        Tăng tương tác thích, bình luận, chia sẻ cho bài viết, giúp nâng cao uy tín doanh nghiệp và tiết kiệm thời gian!
                                    </Typography>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ backgroundColor: '#1476FF', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'auto' }}>
                                <img src="./blue 2.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Box>

            <Box sx={{ marginTop: '25rem', display: { xs: 'block', md: 'none' }, marginRight: '10%', marginLeft: '10%', height: '200rem', padding: '2rem 0rem 2rem 0rem' }}>
                <p style={{ textAlign: 'center', fontSize: '1.35rem' }}>“Pentacle Marketing xây dựng sự hiện diện trên nền tảng số thông qua các hoạt động marketing thu hút, nội dung chất lượng cao và các giải pháp dễ tiếp cận với khách hàng doanh nghiệp.”</p>
                <h1 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Dịch vụ của chúng tôi</h1>
                <div style={{ marginTop: '1rem', textAlign: 'left', display: 'inline-block', width: '100%' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Item sx={{ backgroundColor: '#1476FF', minHeight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <img src="./blue 1.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ margin: '1rem ' }}>
                                    <Typography sx={{ color: 'black', fontSize: '1.9rem', fontWeight: '700', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '2.3rem' }}>
                                        Dịch vụ thiết kế nhận diện thương hiệu
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.08rem', fontFamily: 'Arial, Helvetica, sans-serif' }} >
                                        Thiết kế bộ nhận diện thương hiệu như Logo, Brochure, Banner, Profile… và các ấn phẩm đáp ứng các nhu cầu của quý doanh nghiệp
                                    </Typography>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{ backgroundColor: '#F9C400', minHeight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <img src="./yellow 1.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>

                        <Grid item xs={12}>
                            <Item sx={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ margin: '1rem ' }}>
                                    <Typography sx={{ color: 'black', fontSize: '1.9rem', fontWeight: '700', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '2.3rem' }}>
                                        Dịch vụ bài đăng<br />Facebook và Instagram
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.08rem', fontFamily: 'Arial, Helvetica, sans-serif' }} >
                                        Viết bài quảng cáo, bài PR, bài chia sẻ kiến thức, bài giới thiệu sản phẩm/dịch vụ thu hút khách hàng trên nền tảng <br />Facebook và Instagram
                                    </Typography>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{ backgroundColor: '#00985C', minHeight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <img src="./green 1.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>

                        <Grid item xs={12}>
                            <Item sx={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ margin: '1rem ' }}>
                                    <Typography sx={{ color: 'black', fontSize: '1.9rem', fontWeight: '700', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '2.3rem' }}>
                                        Dịch vụ lập gian hàng thương mại điện tử
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.08rem', fontFamily: 'Arial, Helvetica, sans-serif' }} >
                                        Lập gian hàng thương mại điện tử: Tạo gian hàng trên các sàn thương mại điện tử như Shopee, Lazada...; thiết kế hình ảnh, khung thương hiệu, banner trên các sàn và viết mô tả sản phẩm rõ ràng, chi tiết
                                    </Typography>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{ backgroundColor: '#F9C400', minHeight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <img src="./yellow 2.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>

                        <Grid item xs={12}>
                            <Item sx={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ margin: '1rem ' }}>
                                    <Typography sx={{ color: 'black', fontSize: '1.9rem', fontWeight: '700', fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: '2.3rem' }}>
                                        Dịch vụ tăng tương tác
                                    </Typography>
                                    <Typography sx={{ fontSize: '1.08rem', fontFamily: 'Arial, Helvetica, sans-serif' }} >
                                        Tăng tương tác thích, bình luận, chia sẻ cho bài viết, giúp nâng cao uy tín doanh nghiệp và tiết kiệm thời gian!
                                    </Typography>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{ backgroundColor: '#1476FF', minHeight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <img src="./blue 2.png" alt="webpage" style={{ width: '100%', height: '100%' }} />
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Box >
        </div >
    );
}

export default Services;