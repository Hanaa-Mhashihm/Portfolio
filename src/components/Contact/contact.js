import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animate'
import './contact.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        return((() => {
            setLetterClass('text-animate-hover')
        }))
    }, [])

    // For Email Submitting
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(    
        /* Service ID */  'service_xkpctzk',     
        /* Template ID */ 'template_ytby5y9',
            refForm.current,
        /* Public Key */ 'VnTg8DqJ7b0V7HWRV'
        )
        .then(
            () => {
                alert('Message sent successfully!') 
                window.location.reload(false)
            },
            () => {
                alert('Faild to send the message, please try again')
            }
        )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I am intersted in freelannce and remote opportunities for large projects, if you have other request or questions,
                        dont wait to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li >
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Hanaa Mohamed Hashim
                    <br />
                    Sudan,
                    <br />
                    Khartoum, Omdurman <br />
                    West Bant
                    <span>hanaamhashim85@gmail.com</span>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact