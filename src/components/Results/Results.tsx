import React, { FC, ReactElement } from 'react';

import { iResults } from '../../interfaces/results';
import { getBreed } from '../../utils/breed';
import ImageList from '../ImageList/ImageList';
import { Content } from './Results.styles';

const Results: FC<iResults> = ({ className, probability }): ReactElement => {
  return (
    <Content>
      <p>
        We predicted your dog as: <b>{className}</b> with a probability of{' '}
        <b>{probability}</b>
      </p>
      <ImageList breed={getBreed(className)} />
    </Content>
  );
};

export default Results;
