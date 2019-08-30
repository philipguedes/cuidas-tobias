import * as React from 'react';
import "./event-card.css";
import { HLine, HSeparator } from './separators';
import { Link } from 'react-router-dom';

export class EventCard extends React.Component {
    render() {
        let badgeT, c;
        switch (this.props.data.color) {
            case 0:
                badgeT = "OFICINA"
                c = "#00A8E6";
                break;
            case 1:
                badgeT = "ENCONTROS"
                c = "#8CC14C";
                break;
            case 2:
                badgeT = "ATIVIDADE"
                c = "#FAA732";
                break;

        }

        return (
            <Link to={`/eventos/${this.props.data.name}`}>
                <div className="event-card-card">
                    <div className="event-card-image">
                        {badgeT && <div className="event-card-badge" style={{ backgroundColor: c }}>{badgeT}</div>}

                    </div>
                    <p className="font-h2">{this.props.data.name}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="event-card-photo-ic" />
                        <HSeparator />
                        <p>Organizador</p>
                    </div>
                    <HLine />
                </div>
            </Link>
        )
    }
}