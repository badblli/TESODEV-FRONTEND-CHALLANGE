import logo from '../img/logo.png';
import Header from '../components/Header';

export default function Landing() {
    return (
        <div>
            <Header />
            <div className='logo'><img src={logo} alt="Logo" /></div>

        </div>
    )
}
