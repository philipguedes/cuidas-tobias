import * as React from 'react';
import { Slider, Container, Typography, Button } from '@material-ui/core';

export class SeriousnessMap extends React.Component {
    state = {
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 1,
        q5: 1,
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Typography variant="subtitle1" component="h4">eu me senti alegre e leve</Typography>
                <Slider marks step={1} valueLabelDisplay="auto" min={1} max={5} onChange={(e, q1) => this.setState({ q1 })} />

                <Typography variant="subtitle1" component="h4">eu me senti calmo e relaxado</Typography>
                <Slider marks step={1} valueLabelDisplay="auto" min={1} max={5} onChange={(e, q2) => this.setState({ q2 })} />

                <Typography variant="subtitle1" component="h4">eu me senti ativo e engergetico</Typography>
                <Slider marks step={1} valueLabelDisplay="auto" min={1} max={5} onChange={(e, q3) => this.setState({ q3 })} />

                <Typography variant="subtitle1" component="h4">eu acordei me sentido descansado</Typography>
                <Slider marks step={1} valueLabelDisplay="auto" min={1} max={5} onChange={(e, q4) => this.setState({ q4 })} />

                <Typography variant="subtitle1" component="h4">minha vida cotidiana é cheia de coisas quye me interessam</Typography>
                <Slider marks step={1} valueLabelDisplay="auto" min={1} max={5} onChange={(e, q5) => this.setState({ q5 })} />

                <Button variant="contained" color="primary" onClick={this.submit}>Enviar</Button>
            </Container>
        )
    }

    submit = () => {
        console.log(this.state);
    }
}