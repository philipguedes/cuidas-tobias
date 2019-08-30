import * as React from 'react';
import { EventCard } from '../components/event-card';
import { VSeparator, HSeparator } from '../components/separators';
import { Container } from '@material-ui/core';


export class Feed extends React.Component {
    render() {
        console.log('red');
        return (
            <div style={{paddingRight:'13rem', paddingLeft: '13rem'}}>
                <p className="font-h1">Bem vindo, Gabriel!</p>
                <VSeparator />
                <VSeparator />
                <p className="font-h2">Baseado nos seus interesses, recomendamos os seguintes eventos:</p>
                <VSeparator />
                <div style={{width: '100vw', display: 'flex', backgroundColor: '#EBF7FD', padding: '2rem', marginLeft: '-13rem'}}>
                    {data.map(e => {
                        return (
                            <div style={{ display: 'flex' }}>
                                <EventCard />
                                <HSeparator />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const data = [1, 2, 3, 4]