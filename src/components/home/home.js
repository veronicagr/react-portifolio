import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';

const Home = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle">SOBRE MIM...</h5>
            <Card>
                <div>

                    <p>Atualmente estudante da primeira turma da Laboratória no Brasil, uma organização social latino americana que capacita mulheres em programação.</p>

                    <p>O Bootcamp é integral, com duração de 6 meses e tem como base a vivência de uma empresa de tecnologia. É dividido em Sprints, onde as equipes são separadas por Squads e no final de cada sprint é entregue um produto final.</p>

                    <br />
                    <p><b>Tech Skills desenvolvidas no Bootcamp</b></p>
                    <p>HTML, CSS, Javascript(ES6/ES7), jQuery, Bootstrap, React/Redux, Node.jS, Express, Sass, Ajax, Gulp, API REST, Firebase, Testes Unitários, Git/Github, UX e UI Design, Metodologia Ágil.</p>

                    <br />
                    <p><b>Soft Skills desenvolvidas no Bootcamp</b></p>
                    <p>Planejamento e Organização, Dar e Receber Feedback, Autoaprendizagem, Solução de Problemas, Adaptabilidade, Trabalho em Equipe: Colaborativo e Responsabilidade, Comunicação Eficaz e Apresentações.</p>
                </div>
            </Card>
            <h5 className="subtitle">PROJETOS</h5>


            {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
            <Experience title="Lab-car-boilerplate"
                company="Laboratoria"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                avatar={company_avatar}
            />
            <Experience title="Simpre-server"
                company="Laboratoria"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                avatar={company_avatar2}
            />
        </Col>
    </Row>
);

export default Home;