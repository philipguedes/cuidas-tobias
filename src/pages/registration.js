import { Button, TextField, Slider, Switch } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { Header } from '../components/header';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { VSeparator } from '../components/separators';
import _ from 'lodash';

const ACTIVITIES = ['Corrida', 'Meditação', 'Yoga', 'Caminhada'];
const THEMES = [
  'Saúde mental saudável', 'Ansiedade', 'Depressão',
  'Suicídio', 'Esquizofrenia', 'Psicose', 'Demência',
  'Autismo', 'Transtornos de sexualidade', 'Transtornos alimentares'
];

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
]


export const Registration = (props) => {
  const [sex, setSex] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [profession, setProfession] = useState('');

  const [questions, setQuestions] = useState({
    q1: 0, q2: 0, q3: 0, q4: 0, q5: 0
  });

  const [theme, setTheme] = useState([]);
  const [activity, setActivity] = useState([]);
  const [show, setShow] = useState(false);

  const submit = async () => {
    const body = {
      sex, name, birthday, profession
    };

    console.log('create user', body);
    props.history.push('/');
  }

  const handleTheme = (v) => {
    if (_.includes(theme, v)) {
      setTheme(theme.filter(i => i !== v));
    } else {
      setTheme([...theme, v]);
    }
  }

  const handleActivity = (v) => {
    if (_.includes(activity, v)) {
      setActivity(activity.filter(i => i !== v));
    } else {
      setActivity([...activity, v]);
    }
  }

  const _renderQuestions = () => {
    return (
      <React.Fragment>
        <p className="font-h2">Nas últimas duas semanas eu:</p>

        <p>Eu me senti alegre e leve</p>
        <Slider
          marks={marks}
          step={1}
          min={0}
          max={5}
          onChange={(e, q1) => setQuestions({...questions, q1})}
        />
        <p>Eu me senti calmo e relaxado</p>
        <Slider
          marks={marks}
          step={1}
          min={0}
          max={5}
          onChange={(e, q2) => setQuestions({...questions, q2})}
        />
        <p>Eu me senti ativo e energético</p>
        <Slider
          marks={marks}
          step={1}
          min={0}
          max={5}
          onChange={(e, q3) => setQuestions({...questions, q3})}
        />
        <p>Eu acordei me sentido descansado</p>
        <Slider
          marks={marks}
          step={1}
          min={0}
          max={5}
          onChange={(e, q4) => setQuestions({...questions, q4})}
        />
        <p>Minha vida cotidiana é cheia de coisas que me interessam</p>
        <Slider
          marks={marks}
          step={1}
          min={0}
          max={5}
          onChange={(e, q5) => setQuestions({...questions, q5})}
        />

      </React.Fragment>
    );
  }

  return (
    <div style={{paddingRight:'13rem', paddingLeft: '13rem', width: '100%' }}>
      <Header />
      <VSeparator />
      <div style={{width: '455px', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <p className="font-h1">Informações Básicas</p>
        <TextField
          id="standard-name"
          label="Nome"
          value={name}
          onChange={({ target: { value }}) => setName(value)}
          margin="normal"
          variant="outlined"
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1 }}>
            <TextField
                id="standard-name"
                label="Data de Nascimento"
                value={birthday}
                onChange={({ target: { value }}) => setBirthday(value)}
                margin="normal"
                variant="outlined"
            />
          </div>
          <div style={{ flex: 1 }}>
            <TextField
                id="standard-name"
                label="Sexo"
                value={sex}
                onChange={({ target: { value }}) => setSex(value)}
                margin="normal"
                variant="outlined"
            />
          </div>
        </div>
        <TextField
          id="standard-name"
          label="Profissão"
          value={profession}
          onChange={({ target: { value }}) => setProfession(value)}
          margin="normal"
          variant="outlined"
        />
      <VSeparator />
      <VSeparator />
      <p className="font-h1">Interesses</p>
      <VSeparator />
      <VSeparator />
      <p className="font-h2">ATIVIDADES</p>
      <VSeparator />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          ACTIVITIES.map((v, index) =>
          <div style={{ marginRight: '16px', marginBottom: '16px', height: '40px' }}>
              <ToggleButton
                style={{ whiteSpace: 'nowrap' }}
                selected={_.includes(activity, index)}
                onClick={() => handleActivity(index)}
                key={index}>{v}</ToggleButton>
            </div>
          )
        }
      </div>
      <VSeparator />
      <VSeparator />
      <p className="font-h2">TEMAS</p>
      <VSeparator />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          THEMES.map((v, index) =>
            <div style={{ marginRight: '16px', marginBottom: '16px', height: '40px' }}>
              <ToggleButton
                style={{ whiteSpace: 'nowrap' }}
                selected={_.includes(theme, index)}
                onClick={() => handleTheme(index)}
                key={index}>{v}</ToggleButton>
            </div>
          )
        }
      </div>
      <VSeparator />
      <VSeparator />
      <div style={{ display: 'flex', whiteSpace: 'nowrap', alignItems: 'center' }}>
        <Switch
          checked={show}
          onChange={() => setShow(!show)}
        /> <p className="font-h2">Sinto alguma preocupação sobre a minha saúde mental</p>
      </div>
      <VSeparator />
      <VSeparator />
      { !show ? null : _renderQuestions() }
      <VSeparator />
      <VSeparator />
      <div>
        <Button variant="contained" color="primary" onClick={submit}>Enviar</Button>
      </div>
    </div>
    </div>
  );
};

export default withRouter(Registration);