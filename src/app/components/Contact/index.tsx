import Image from 'next/image';
import './index.scss';
import callicon from '@/app/Svgs/call.svg'
import whatsappicon from '@/app/Svgs/whatsapp.svg'
import mailicon from '@/app/Svgs/mail.svg'
import linkedicon from '@/app/Svgs/linkedin.svg'
import linkicion from '@/app/Svgs/link.svg'
const Contact = () => {
    return (
        <div className="cont">
            <div className="contact">
                <h1>How to contact me</h1>
                <div className="box">
                    <Image className='img' src={callicon} alt='' />
                    <p>01090819445 - 01556175118 </p>
                </div>
                <div className="box">
                    <Image className='img' src={whatsappicon} alt='' />
                    <p>01090819445 - 01556175118 </p>
                </div>
                <div className="box">
                    <Image className='img'src={mailicon} alt='' />
                    <p>hussin992002@gmail.com</p>
                </div>
                <div className="box">
                    <Image className='img' src={linkedicon} alt='' />
                    <a href="https://www.linkedin.com/in/hussin-ashour-8802b4298/" target='blank'>My linked-in <Image className="linkimg" src={linkicion} alt=''></Image></a>
                </div>

            </div>
        </div>
    )
}

export default Contact;