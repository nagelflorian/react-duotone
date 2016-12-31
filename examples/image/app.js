import React, { Component } from 'react';
import { render } from 'react-dom';
import { DuotoneImage } from '../../src/main.js';
import image1 from './image_1.jpg';
import image2 from './image_2.jpg';
import image3 from './image_3.jpg';
import image4 from './image_4.jpg';
import image5 from './image_5.jpg';
import image6 from './image_6.jpg';
import image7 from './image_7.jpg';
import './reset.css';
import './app.css';

const App = () => {
  return <div className='container'>
    <header>
      <h1>Duotone Image Examples</h1>
      <p>Images from Unsplash.com</p>
    </header>
    <div className='duotone-container'>
      <DuotoneImage
        src={image1}
        primaryColor='#FBFBFB'
        secondaryColor='#283B6B'
      />
      <div>
        <span>Primary-Color: #FBFBFB, Secondary-Color: #283B6B</span>
      </div>
    </div>
    <div className='duotone-container'>
      <DuotoneImage
        src={image2}
        primaryColor='#FCC862'
        secondaryColor='#2D45C6'
      />
      <div>
        <span>Primary-Color: #FCC862, Secondary-Color: #2D45C6</span>
      </div>
    </div>
    <div className='duotone-container'>
      <DuotoneImage
        src={image3}
        primaryColor='#71DF6F'
        secondaryColor='#272D67'
      />
      <div>
        <span>Primary-Color: #71DF6F, Secondary-Color: #272D67</span>
      </div>
    </div>
    <div className='duotone-container'>
      <DuotoneImage
        src={image4}
        primaryColor='#D92037'
        secondaryColor='#2A3060'
      />
      <div>
        <span>Primary-Color: #D92037, Secondary-Color: #2A3060</span>
      </div>
    </div>
    <div className='duotone-container'>
      <DuotoneImage
        src={image5}
        primaryColor='#8ADFD0'
        secondaryColor='#5C2998'
      />
      <div>
        <span>Primary-Color: #8ADFD0, Secondary-Color: #5C2998</span>
      </div>
    </div>
    <div className='duotone-container'>
      <DuotoneImage
        src={image6}
        primaryColor='#FCC862'
        secondaryColor='#2D45C6'
      />
      <div>
        <span>Primary-Color: #FCC862, Secondary-Color: #2D45C6</span>
      </div>
    </div>
    <div className='duotone-container'>
      <DuotoneImage
        src={image7}
        primaryColor='#A3D5CA'
        secondaryColor='#E52839'
      />
      <div>
        <span>Primary-Color: #A3D5CA, Secondary-Color: #E52839</span>
      </div>
    </div>
  </div>
}

render(<App />, document.getElementById('app'));
