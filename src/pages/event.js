import * as React from 'react';
import { Header } from '../components/header';
import { VSeparator, HSeparator } from '../components/separators';

export class EventPage extends React.Component {
    render() {
        console.log(this.props.match)
        return (
            <div style={{ paddingRight: '13rem', paddingLeft: '13rem' }}>
                <Header />
                <VSeparator />
                <div style={{ width: '100vw', marginLeft: '-13rem', backgroundColor: '#00A8E6', paddingTop: '3rem', paddingBottom: '3rem', color: 'white' }}>
                    <div style={{ paddingLeft: '13rem', paddingRight: '13rem', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <p className="font-h2">Sexta, 20 de Setembro de 2019</p>
                            <p className="font-h1">{this.props.match.params.name}</p>
                            <VSeparator />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ color: 'white', border: '1px solid white', padding: 10, height: '1rem' }}><p className="font-h3" style={{ fontSize: '50%', margin: 0 }}>OFICINA</p></div>
                                <HSeparator />
                                <p>Organizada por </p>
                                <HSeparator />
                                <p className="font-h3" style={{ height: 18 }}>Pedro Correa </p>
                                <HSeparator />
                                <p>Enfermeiro</p>
                            </div>
                        </div>
                        <div style={{ width: '12rem', height: '8rem', backgroundColor: '#EBF7FD', color: '#2D6F91', padding: '1rem' }}>
                            <p>8 Pessoas confirmadas</p>
                            <p>Você pretende ir?</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ color: '#0077DD', border: '1px solid #00A8E6', padding: 10, height: '1rem', width: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p className="font-h3" style={{ fontSize: '50%', margin: 0 }}>SIM</p></div>
                                <div style={{ color: '#0077DD', border: '1px solid #00A8E6', padding: 10, height: '1rem', width: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p className="font-h3" style={{ fontSize: '50%', margin: 0 }}>NÃO</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <VSeparator />
                <div style={{ paddingRight: '18rem' }}>
                    <p>
                        Sempre fui muito fã de ter alguns momentos sozinha, nos quais a prioridade sou eu mesma e mais nada nem ninguém. Essa necessidade cresce cada vez mais e resolvi compartilhar dicas para quem sente o mesmo.
                    </p>
                    <VSeparator />
                    <p>
                        Não faz nem 6 meses que iniciei a prática, mas já estou viciada. Logo na primeira aula comecei a sentir os efeitos e me entusiasmar. Atualmente, minhas 2 horas por semana de Yoga são sagradas e representam momentos em que a exclusividade sou eu e mais nada. Recomendo a prática principalmente no final do dia, após todo o estresse da rotina, pois acho que é um bom momento para relaxar. O Yoga ajuda no relaxamento e diminuição do estresse e ansiedade, além de aliviar dores corporais e ajudar no condicionamento físico. Corpo e mente unidos, tem coisa melhor?
                    </p>
                    <VSeparator />
                    <p>
                        Programação (a confirmar)<br />
                        18h00 - Abertura<br />
                        18h10 - [Introdução] Filipe Nzongo - Importância dos dados em projetos de UX<br />
                        18h30 - [Introdução] Luiz Resende - Dados e métricas na construção de uma boa experiência<br />
                        18h50 - Perguntas e discussão sobre o tema<br />
                        19h00 - [Palestra] Caio Calado<br />
                        19h40 - Perguntas e discussão sobre o tema<br />
                        19h50 - Coffee break<br />
                        20h10 - [Painel de discussão] Huxley Dias + Filipe Nzongo + Luiz Resende<br />
                        20h50 - Perguntas e discussão sobre o tema<br />
                        21h00 - Encerramento<br />
                    </p>
                    <VSeparator />
                    <p>
                        A meditação está na moda, mas não é tão simples assim. Eu ainda tenho um pouco de dificuldade na prática, mas vale a pena treinar e reservar um espacinho da sua rotina para este hábito. Isso porque entre os inúmeros benefícios estão a diminuição de estresse e aumento da capacidade de concentração. No começo é bom usar aplicativos de meditação guiada, caso contrário, é fácil perder a motivação. Mesmo sendo difícil no início, é bom persistir, pois os benefícios são ótimos para a sua mente.
                    </p>
                    <VSeparator />
                    <p>
                        Ter sucesso é vencer as pequenas batalhas dia após dia
                        Deixe a vida fluir… o Universo tem todas as respostas
                        “Os verdadeiros analfabetos são os que aprenderam a ler e não leem”
                    </p>
                    <VSeparator />
                </div>
            </div>
        )
    }
}