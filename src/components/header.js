import * as React from 'react';
import { HSeparator, HLine, VSeparator } from './separators';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <VSeparator />
                <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <Link to="/" style={{ color: 'black', textDecoration: 'none', width: '100%', display: 'flex', alignItems: 'center' }}>
                        <img src={require('../logo.svg')} height={34} width={34} style={{ display: 'inline' }} />
                        <HSeparator />
                        <p className="font-logo">Tobias</p>
                    </Link>
                    <img src={require('../assets/search.svg')} />
                </div>
                <VSeparator />
                <HLine />
                <VSeparator />
            </div>
        )
    }
}