import React, { FC, ReactElement } from 'react';
import LazyLoad from 'react-lazyload';

import { ImageWrapper, Placeholder, StyledImage } from './LazyImage.styles';

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: FC<LazyImageProps> = ({ src, alt }): ReactElement => {
  const referencePlaceholder = React.useRef(null);

  const removePlaceholder = (): void => {
    const { current } = referencePlaceholder;
    current && current.remove();
  };

  return (
    <ImageWrapper>
      <Placeholder ref={referencePlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

export default LazyImage;
