import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Aravindha </span>
            from <span className='purple'> Tamil Nadu, India.</span>
            <br />
            <p style={{ textAlign: 'justify' }}>
              Recent graduate from Computer Science and Business Systems who
              loves to transform ideas into reality using my skills.
              <br />
            </p>
            <br></br>
            <p style={{ textAlign: 'justify' }}>
              Motivated graduate with experience in creating custom websites
              using ReactJS, JavaScript, HTML5, and CSS3. During a rewarding
              one-year internship at Safelyshare, I honed my web development
              skills and gained hands-on experience in crafting user-friendly
              designs and efficient solutions. Known for my strong work ethic,
              attention to detail, and quick learning ability, I thrive in both
              team settings and independent projects. As a dedicated team
              player, I'm always eager to tackle challenges and improve team
              performance.<br></br>
              <br />
            </p>
            Let's create something amazing together!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
