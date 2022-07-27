import AnimatedLetters from '../AnimatedLetters/animate';
import './about.scss';

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
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
        </div>
    )
}

export default About