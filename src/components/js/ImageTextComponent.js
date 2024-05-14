import React from 'react';
import '../css/ImageTextComponent.css';

const ImageTextComponent = ({ imageSrcs = [], altText = "", children, reverse }) => (
    <div className={`image-text-component ${reverse ? 'reverse' : ''}`}>
      <div className="image-container">
        {imageSrcs.map((src, index) => (
          <img key={index} src={src} alt={altText} />
        ))}
      </div>
      <div className="text-container">
        {children}
      </div>
    </div>
);

// const ImageTextComponent = ({ imageSrc, altText, children, reverse }) => {
//     const classes = `image-text-component ${reverse ? 'reverse' : ''}`;

//     return (
//         <div className={classes}>
//             <img src={imageSrc} alt={altText} />
//             <p>{children}</p>
//         </div>
//     );
// };

export default ImageTextComponent;