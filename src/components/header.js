import * as React from 'react';
import { HSeparator, HLine, VSeparator } from './separators';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <VSeparator />
                <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <img src={require('../logo.svg')} height={34} width={34} style={{ display: 'inline' }} />
                        <HSeparator />
                        <p className="font-logo">Tobias</p>
                    </div>
                    <img src={require('../assets/search.svg')} />
                </div>
                <VSeparator />
                <HLine />
                <VSeparator />
            </div>
        )
    }
}