import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          'Front End Developer',
          'Back End Developer',
          'Software Engineer',
          'Business Analyst',
          'HR Management',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
