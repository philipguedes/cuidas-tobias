import * as React from 'react';
import "./event-card.css";
import { HLine, HSeparator } from './separators';

export class EventCard extends React.Component {
    render() {
        return (
            <div className="event-card-card">
                <div className="event-card-image">
                    <div className="event-card-badge">OFICINA</div>

                </div>
                <p className="font-h2">O que são psicoses?</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="event-card-photo-ic" />
                    <HSeparator />
                    <p>Organizador</p>
                </div>
                <HLine />
            </div>
        )
    }
}