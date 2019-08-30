import * as React from 'react';
import { Container, Typography, Button, TextField } from '@material-ui/core';

export class BasicInfos extends React.Component {
    state = {
        name: ''
    }
    render() {
        console.log(this.state)
        return (
            <Container maxWidth="sm">
                <Typography variant="subtitle1" component="h4">Nome</Typography>
                <TextField
                    id="standard-name"
                    label="name"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    margin="normal"
                />

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 1 }}>
                        <Typography variant="subtitle1" component="h4">Data de Nascimento</Typography>
                        <TextField
                            id="standard-name"
                            label="birthday"
                            value={this.state.birthday}
                            onChange={e => this.setState({ birthday: e.target.value })}
                            margin="normal"
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <Typography variant="subtitle1" component="h4">Sexo</Typography>
                        <TextField
                            id="standard-name"
                            label="sex"
                            value={this.state.sex}
                            onChange={e => this.setState({ sex: e.target.value })}
                            margin="normal"
                        />
                    </div>
                </div>

                <Typography variant="subtitle1" component="h4">Profissão</Typography>
                <TextField
                    id="standard-name"
                    label="profession"
                    value={this.state.profession}
                    onChange={e => this.setState({ profession: e.target.value })}
                    margin="normal"
                />

                <div>
                    <Button variant="contained" color="primary" onClick={this.submit}>Enviar</Button>
                </div>
            </Container>
        )
    }
}