import * as React from 'react';
import { Header } from '../components/header';
import { HSeparator, VSeparator } from '../components/separators';
import { EventCard } from '../components/event-card';

export class ProfessionalsPage extends React.Component {
    render() {
        return (
            <div style={{ paddingLeft: '13rem', paddingRight: '13rem' }}>
                <Header />
                <div style={{ width: '100vw', marginLeft: '-13rem', backgroundColor: '#DA314B' }}>
                    <div style={{
                        paddingLeft: '13rem', display: 'flex', justifyContent: 'space-between', display: 'flex',
                        paddingRight: '13rem', paddingTop: '3rem', paddingBottom: '3rem', alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex' }}>
                            <img src={require('../assets/round-person-big.png')} width={100} height={100} />
                            <HSeparator />
                            <div>
                                <p className="font-h1" style={{ color: 'white' }}>Marina A. Linda</p>
                                <VSeparator />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ color: 'white', border: '1px solid white', padding: 10, height: '1rem' }}><p className="font-h3" style={{ fontSize: '50%', margin: 0 }}>PROFISSIONAL</p></div>
                                    <HSeparator />
                                    <p className="font-h2" style={{ color: 'white' }}>Psicóloga</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#EBF7FD', padding: '1rem' }}>
                            <p>marinalinda@cuidas.com.br</p>
                            <p>11 97876 7828</p>
                            <div style={{ color: '#0077DD', border: '1px solid #00A8E6', padding: 10, height: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p className="font-h3" style={{ fontSize: '50%', margin: 0 }}>Site</p></div>
                        </div>
                    </div>
                </div>
                <VSeparator />
                <VSeparator />
                <p className="font-h1">Eventos Organizados</p>
                <VSeparator />
                <div style={{ width: '100vw', marginLeft: '-13rem', backgroundColor: '#FFF1F0', paddingTop: '3rem', paddingBottom: '3rem' }}>
                    <div style={{ paddingRight: '13rem', paddingLeft: '13rem', display: 'flex' }}>
                        {data.featured.map((e, index) => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <EventCard data={e} key={index} index={index} />
                                    <HSeparator />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <VSeparator />
                <VSeparator />
                <p className="font-h1">Links Relacionados</p>
                <VSeparator />
                <div style={{display: 'flex'}}>
                    <LinkBadge s="Medium"/>
                    <HSeparator />
                    <HSeparator />
                    <LinkBadge s="Video"/>
                    <HSeparator />
                    <HSeparator />
                    <LinkBadge s="Artigo"/>
                    <HSeparator />
                </div>
                <VSeparator />
                <VSeparator />
            </div>
        )
    }
}


const data = {
    featured: [{
        name: 'O que são psicoses?',
        color: 0
    },
    {
        name: 'Suicídio é sério, vamos enfrentar juntos',
        color: 1
    }, {
        name: 'Bicicletada no Ibirapuera',
        color: 2
    }],
    workshops: [{
        name: 'Estresse pós traumático: estratégias de apoio',
    },
    {
        name: 'Suicídio é sério, vamos enfrentar juntos',
    }, {
        name: 'Cuidados com sintomas ansiosos',
    }, {
        name: 'Suicídio é sério, vamos enfrentar juntos',
    }],
    meetings: [{
        name: 'Reconciliação com seu corpo',

    },
    {
        name: 'Estou triste. Será que é depressão?',

    }, {
        name: 'Suicídio é sério, vamos enfrentar juntos',

    }],
    activities: [
        {
            name: 'Grupo de caminhada',
        },
        {
            name: 'Fundamentos da meditação',
        }, {
            name: 'Yoga para iniciantes',
        }, {
            name: 'Suicídio é sério, vamos enfrentar juntos',
        }
    ],
    professionals: ["Marina A. Linda", "Lorena Ávila", "Mário Quintana", "Pedro Correa",]
}

const LinkBadge = (props) => <div style={{display: 'flex', flexWrap: 'wrap', width: '10rem', backgroundColor: '#EBF7FD', padding: '2rem', color: '#2D6F91'}}>
    <p className="font-h2">{props.s}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>