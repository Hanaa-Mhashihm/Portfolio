import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact} from "@fortawesome/free-brands-svg-icons"
import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters/animate';
import './about.scss';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        return((() => {
            setLetterClass('text-animate-hover')
        }))
    }, [])

    return (
        <>
        <div className='container about-page'> 
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm front-end developer expert in JS frameworks and libraries, always pleaure to learn new and modern technologies
                </p>
                <p>
                    I'm quitely confident, working hard on improving my self on programming
                </p>
                <p>
                    Trying to get best practices code structure
                </p>
            </div>  

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color="#56835f" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face7'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About