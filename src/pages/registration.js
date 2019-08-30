import { Button, TextField, Typography, Slider } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { VSeparator } from '../components/separators';


export const Registration = (props) => {
  const [sex, setSex] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [profession, setProfession] = useState('');

  const submit = async () => {
    const body = {
      sex, name, birthday, profession
    };

    console.log('create user', body);
    props.history.push('/');
  }

  return (
    <div style={{paddingRight:'13rem', paddingLeft: '13rem'}}>
      <p className="font-h1">Informações Básicas</p>
      <VSeparator />
      <div style={{width: '455px', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <TextField
          id="standard-name"
          label="Nome"
          value={name}
          onChange={setName}
          margin="normal"
          variant="outlined"
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1 }}>
            <TextField
                id="standard-name"
                label="Data de Nascimento"
                value={birthday}
                onChange={setBirthday}
                margin="normal"
                variant="outlined"
            />
          </div>
          <div style={{ flex: 1 }}>
            <TextField
                id="standard-name"
                label="Sexo"
                value={sex}
                onChange={setSex}
                margin="normal"
                variant="outlined"
            />
          </div>
        </div>

        <TextField
          id="standard-name"
          label="Profissão"
          value={profession}
          onChange={setProfession}
          margin="normal"
          variant="outlined"
        />
      </div>

      <VSeparator />
      <VSeparator />
      <p className="font-h1">Interesses</p>
      <VSeparator />

      <div>
        <Button variant="contained" color="primary" onClick={submit}>Enviar</Button>
      </div>
    </div>
  );
};

export default withRouter(Registration);