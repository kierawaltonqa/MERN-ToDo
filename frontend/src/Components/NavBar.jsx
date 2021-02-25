
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

const NavBar = () => {
    return (
        <>
            <Navbar colour="dark" dark expand="md">
                <Link to='/' className="btn btn-outline-dark">Home</Link>
                <Link to='/about' className="btn btn-outline-dark">About</Link>
                <a href="http://github.com/kierawaltonqa" className="btn btn-outline-light">Github</a>
            </Navbar>
        </>
    )
}
export default NavBar;