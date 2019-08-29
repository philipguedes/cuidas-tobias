import * as React from 'react';
import { Slider, Container, Typography, Button } from '@material-ui/core';

export class BasicInfos extends React.Component {
    state={
        name: ''
    }
    render() {
        return (
            <Container maxWidth="sm">
                <Typography variant="subtitle1" component="h4">Nome</Typography>
                <TextField
                    id="standard-name"
                    label="name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />

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
}