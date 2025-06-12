import React from 'react';
import cn from 'classnames';
import styles from './TechSpecs.module.scss';
import { Gadget } from '@models/dto/Gadget';

interface Props {
  gadget: Gadget;
}

export const TechSpecs: React.FC<Props> = ({ gadget }) => {
  return (
    <div className={styles.tech}>
      <div className={styles.techHead}>
        <h3>Tech specs</h3>
        <hr />
      </div>

      <ul className={styles.techMain}>
        <li className={cn('smallText', styles.techMainText)}>
          Screen: <span>{gadget.screen}</span>
        </li>
        <li className={cn('smallText', styles.techMainText)}>
          Resolution: <span>{gadget.resolution}</span>
        </li>
        <li className={cn('smallText', styles.techMainText)}>
          Processor: <span>{gadget.processor}</span>
        </li>
        <li className={cn('smallText', styles.techMainText)}>
          RAM: <span>{gadget.ram}</span>
        </li>
        <li className={cn('smallText', styles.techMainText)}>
          Built in memory: <span>{gadget.capacity}</span>
        </li>
        {Object.hasOwn(gadget, 'camera') && (
          <li className={cn('smallText', styles.techMainText)}>
            Camera: <span>{gadget.camera}</span>
          </li>
        )}
        {Object.hasOwn(gadget, 'zoom') && (
          <li className={cn('smallText', styles.techMainText)}>
            Zoom: <span>{gadget.zoom}</span>
          </li>
        )}
        <li className={cn('smallText', styles.techMainText)}>
          Cell: <span>{gadget.cell.join(', ')}</span>
        </li>
      </ul>
    </div>
  );
};
