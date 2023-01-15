import React from 'react'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import './Rodape.css'

export default function Rodape() {
    return (
        <footer className='rodape'>
            <div className='rodapeIcones'>
                <a href="https://twitter.com/nakwan_4" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="ícone do twitter" />
                </a>
                <a href="https://www.instagram.com/_srmarques_/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="ícone do instagram" />
                </a>
                <a href="https://github.com/KawanMN" target="_blank" rel="noreferrer">
                    <img src={github} alt="ícone do github" />
                </a>
                <a href="https://www.linkedin.com/in/kawan-marques/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="ícone do linkedin" />
                </a>
            </div>
            <p>Desenvolvido por Kawan Marques</p>
        </footer>
    )
}
