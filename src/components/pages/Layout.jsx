import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Banner from '../Banner/Banner';

const Layout = ({ children }) => {
    return (
        <>
        <NavBar />
        <Banner slogan={'Vive tu pasión, viste tu equipo'} />  
        {children}
        <Footer />
        </>
    )
};

export default Layout;