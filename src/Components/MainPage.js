import AboutUs from './AboutUs';
import Footer from './Footer';
import Header from './Header';
import MailForm from './MailForm';
import Product from './Products';
import Services from './Services';

export default function MainPage() {
  return (
    <div className="App">
      <Header/>
      <section id="home">
        <div>Welcome to our website</div>
      </section>
      <section id="about">
        <AboutUs/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="products">
        <Product/>
      </section>
      <section id="contact">
        <MailForm/>
      </section>
      <Footer/>
    </div>
  );
}
