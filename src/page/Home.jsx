import About from '../components/About';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  return (
    <div className='container my-0 mx-auto bg-slate-800 '>
      <div>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About/>
        </div>
      </div>
    </div>
  );
};

export default Home;
