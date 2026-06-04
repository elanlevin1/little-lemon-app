import Nav from './Nav/Nav';
import Main from './Main/Main';
import Footer from './Footer/Footer';

/* HomePage component serves as the main page of the application,
rendering the navigation bar, main content, and footer sections. */
const HomePage = () => {
    return (
    <>
      <section className='flex-grid'>
        <Nav />
      </section>
      <section className='flex-grid'>
        <Main />
      </section>
      <section className='flex-grid'>
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
