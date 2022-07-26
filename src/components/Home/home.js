import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/H 1.png';
import AnimatedLetters from '../AnimatedLetters/animate';
import './home.scss'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'n', 'a', 'a']
    const jobArray = ['W', 'e', 'b', '  ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        return((() => {
            setLetterClass('text-animate-hover')
        }))
    }, [])
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i, </span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="Developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Frontend Developer / JavaScript Expert </h2>
                <Link to="/contact" className='flat-button'> Contact Me</Link>
            </div>
        </div>
    )
} 

export default Home