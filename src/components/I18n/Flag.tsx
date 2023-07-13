import React from 'react';
import { Image } from './styles';

const Flag = ({ image, isSelected, ...props }: any) => (
    <Image 
        alt="flag" 
        src={image}
        className={isSelected ? 'flag selected' : 'flag'}
        isSelected={isSelected}
        {...props}
    />
);

export default Flag;
