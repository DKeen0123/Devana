import React from 'react';
import { ColorExtractor } from 'react-color-extractor';

const Palette = (imgUrl: string) => {
  console.log('imgurl: ', imgUrl);
  return (
    <div>
      <ColorExtractor getColors={(colors) => console.log('colors:', colors)}>
        <img src={imgUrl.imgSrc} alt="..." />
      </ColorExtractor>
    </div>
  );
};

export default Palette;
