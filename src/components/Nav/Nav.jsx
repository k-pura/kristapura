import { Link, Router } from 'react-router-dom';

export default function Nav() {
    return(
        <div className='nav'>
            
            <Link to='/home'>Home</Link>
            &nbsp;
            <Link to='/about'>About</Link>
            &nbsp;
            <Link to='/portfolio'>Portfolio</Link>
            &nbsp;
            <Link to='/contact'>Contact</Link>
            &nbsp;
            
        </div>
    )
}