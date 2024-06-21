import { Box } from "@mui/material";

function AboutUs() {
    return (
        <div>
            <Box sx={{ marginTop: '20rem', display: { xs: 'block', md: 'none' }, marginLeft:'3rem', marginRight:'7rem', height:'auto', padding:'2rem 0rem 0rem 0rem', marginBottom:'-20rem'}}>
                <h1 style={{ textAlign:'justify', fontSize:'2.5rem', marginLeft:'3rem' }}>Về chúng tôi</h1>
                <div style={{ marginTop:'1rem', textAlign:'left', marginLeft:'3rem' }}>
                    <img src="./webinar.png" alt="webpage" width={'auto'} height={'400'} style={{width:'100%', height:'auto'}}/>
                    <div style={{ display: 'block'}}>
                        <h2 style={{ textAlign:'justify', fontSize:'2.5rem' }}>Pentacle Marketing</h2>
                        <p style={{ textAlign:'justify', fontSize:'1.3rem', color:'gray', marginTop:'-2rem' }}>
                            Pentacle Marketing là một tập thể năng động và sáng tạo, chuyên cung cấp các dịch vụ Marketing hiệu quả cho doanh nghiệp. Chúng tôi chuyên cung cấp các dịch vụ Marketing cho doanh nghiệp, bao gồm:
                            <br /><br />- Bài viết Facebook, Instagram;
                            <br /><br />- Thiết kế nhận diện thương hiệu;
                            <br /><br />- Lập gian hàng thương mại điện tử;
                            <br /><br />- Tăng tương tác.
                        </p>
                    </div>
                </div>
            </Box>

            <Box sx={{ marginTop: '40rem', display: { xs: 'none', md: 'block' }, marginLeft:'7rem', marginRight:'7rem', height:'auto', padding:'2rem 0rem 2rem 0rem', marginBottom:'-22rem'}}>
                <h1 style={{ textAlign:'justify', fontSize:'2.5rem'}}>Về chúng tôi</h1>
                <div style={{ display: 'flex', marginTop:'3rem'  }}>
                    <img src="./webpage-browser-digital-icon-symbols-concept.jpg" alt="webpage" width={'auto'} height={'400'} style={{width:'45%', height:'45%'}}/>
                    <div style={{ display: 'block', margin:'-3rem 0rem 0rem 5rem' }}>
                        <h2 style={{ textAlign:'justify', fontSize:'2.5rem' }}>Pentacle Marketing</h2>
                        <p style={{ textAlign:'justify', fontSize:'1.3rem', color:'gray', marginTop:'-2rem' }}>
                            Pentacle Marketing là một tập thể năng động và sáng tạo, chuyên cung cấp các dịch vụ Marketing hiệu quả cho doanh nghiệp. Chúng tôi chuyên cung cấp các dịch vụ Marketing cho doanh nghiệp, bao gồm:
                            <br /><br />- Bài viết Facebook, Instagram;
                            <br /><br />- Thiết kế nhận diện thương hiệu;
                            <br /><br />- Lập gian hàng thương mại điện tử;
                            <br /><br />- Tăng tương tác.
                        </p>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default AboutUs;