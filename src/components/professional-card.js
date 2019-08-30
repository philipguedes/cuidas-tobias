import * as React from 'react';
import './professional-card.css';
import { HSeparator } from './separators';
import { Link } from 'react-router-dom';

export class ProfessionalCard extends React.Component {
    render() {
        return (
            <div className="professional-card-card">
                <Link to={`/profissionais/${this.props.name}`} style={{color: 'black', textDecoration: 'none'}}>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#444444' }}>
                        <img src={require('../assets/round-person' + this.props.index + '.png')} width={60} height={60} />
                        <HSeparator />
                        <div>
                            <p className="font-h3">{this.props.name}</p>
                            <p>Psicóloga</p>
                        </div>
                    </div>
                    <p>Organizadora</p>
                    <p>Suicídio é sério, vamos enfrentar juntos, estresse pós-traumatico: estratégias de apoio</p>
                </Link>
            </div>
        )
    }
}