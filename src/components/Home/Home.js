import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/man.png';
import SocialMedia from '../SocialMedia';
import TypeWriter from './TypeWriter';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Container className='home-content'>
          <Row>
            <Col md={6} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> Aravindha</strong>
              </h1>

              <p
                className='heading-description blockquote'
                style={{ textAlign: 'justify' }}
              >
                Hello! I'm Aravindha S, a passionate and skilled software
                developer with a strong focus on coding excellence and
                innovative solutions. With a blend of strong technical skills
                and creative problem-solving abilities, I thrive in creating
                sophisticated, user-centric web applications and dynamic
                software solutions.
              </p>

              <div className='heading-type'>
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className='profile-pic' alt='avatar' />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='home-about-section' id='about'>
        <Container>
          <Row>
            <Col md={12} className='home-about-social'>
              <h1>Get in Touch</h1>
              <p>
                {' '}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
