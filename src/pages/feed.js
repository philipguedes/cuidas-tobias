import * as React from 'react';
import { EventCard } from '../components/event-card';
import { VSeparator, HSeparator } from '../components/separators';
import { Container } from '@material-ui/core';
import { Header } from '../components/header';


export class Feed extends React.Component {
    render() {
        console.log('red');
        return (
            <div style={{ paddingRight: '13rem', paddingLeft: '13rem' }}>
                <Header />
                <p className="font-h1">Bem vindo, Gabriel!</p>
                <VSeparator />
                <VSeparator />
                <p className="font-h2">Baseado nos seus interesses, recomendamos os seguintes eventos:</p>
                <VSeparator />
                <div style={{ width: '100vw', display: 'flex', backgroundColor: '#EBF7FD', paddingTop: '2rem', paddingBottom: '2rem', marginLeft: '-13rem' }}>
                    <div style={{ paddingRight: '13rem', paddingLeft: '13rem', display: 'flex' }}>
                        {data.featured.map((e, index) => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <EventCard data={e} key={index} index={index}/>
                                    <HSeparator />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <VSeparator />
                <p className="font-h3" style={{ color: '#00A8E6' }}>OFICINAS</p>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex' }}>
                        {data.workshops.map((e, index) => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <EventCard data={e} key={index} index={3+index}/>
                                    <HSeparator />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <VSeparator />
                <p className="font-h3" style={{ color: '#8CC14C' }}>ENCONTROS</p>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex' }}>
                        {data.meetings.map((e, index) => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <EventCard data={e} index={7+index}/>
                                    <HSeparator />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <VSeparator />
                <p className="font-h3" style={{ color: '#FAA732' }}>ATIVIDADES</p>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex' }}>
                        {data.activities.map((e, index) => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <EventCard data={e}  index={10+index}/>
                                    <HSeparator />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <VSeparator />
                <p className="font-h3" style={{ color: '#DA314B' }}>PROFISSIONAIS</p>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex' }}>
                        {data.professionals.map((e, index) => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <EventCard data={e} index={index}/>
                                    <HSeparator />
                                </div>
                            )
                        })}
                    </div>
                </div>

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
    professionals: []
}