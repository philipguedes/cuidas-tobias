import * as React from 'react';
import { Header } from '../components/header';
import { VSeparator } from '../components/separators';

export class EventPage extends React.Component {
    render() {
        console.log(this.props.match)
        return (
            <div style={{ paddingRight: '13rem', paddingLeft: '13rem' }}>
                <Header />
                <VSeparator />
                <div style={{ width: '100vw', marginLeft: '-13rem', backgroundColor: '#00A8E6', paddingTop: '3rem', paddingBottom: '3rem', color: 'white' }}>
                    <div style={{ paddingLeft: '13rem', paddingRight: '13rem' }}>
                        <div>
                            <p className="font-h2">Sexta, 20 de Setembro de 2019</p>
                            <p className="font-h1">Se reconciliando com seu corpo</p>
                            <div style={{ display: 'flex' }}>
                                <div style={{ color: 'white', border: '1px solid white', padding: 10, display: 'inline-block' }}><p className="font-h3" style={{fontSize: '50%', margin: 0}}>OFICINA</p></div>
                                <p>Organizada por </p>
                                <p>Pedro Correa </p>
                                <p>Enfermeiro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}