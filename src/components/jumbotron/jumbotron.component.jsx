import React from 'react';
import {jumboData} from '../../fixtures/jumbo'
import Jumbotron from './jumbotron.index';


//styles 


const JumboContainer = () => {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map(({title,subTitle,image,alt,id,direction}) => (
          <Jumbotron key={id} direction = {direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
           <Jumbotron.Pane>
              <Jumbotron.Image src={image} alt={alt}/>
           </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

export default JumboContainer;