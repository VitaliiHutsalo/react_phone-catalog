import React from 'react';
import cn from 'classnames';
import styles from './ColorSelector.module.scss';
import { Color } from '../../../../../types/common/Color';
import { ColorMapping } from '../../../utils/ColorMapping';

interface Props {
  isActive?: boolean;
  color?: Color;
}

export const ColorSelectorButton: React.FC<Props> = ({
  isActive = false,
  color = 'red',
}) => {
  return (
    <button className={cn(styles.colorSelector)} disabled={isActive}>
      <div
        style={{
          backgroundColor: ColorMapping(color),
        }}
        className={styles.colorSelectorLink}
      ></div>
    </button>
  );
};
