import React from 'react';
import { CardInterface } from '../../index';
import styles from './styles.module.css';
import PlainButton from '../../../../../../../../components/buttons/PlainButton';
import clsx from 'clsx';

type Props = {
  data: CardInterface;
  active: boolean;
  className?: string;
  width?: number;
  height?: number;
};

const Card: React.FC<Props> = (props) => {
  const { data, className, active, width, height } = props;

  return (
    <div
      className={clsx(styles.Container, className, {
        [styles.Container_Active]: active,
      })}
      style={{ width, height }}>
      <div className={styles.ContentContainer}>
        <img
          alt={data.imagePath}
          src={data.imagePath}
          className={styles.Image}
        />
        <div className={styles.TextContainer}>
          <div className={styles.Title}>{data.title}</div>
          <div className={styles.Description}>{data.description}</div>
        </div>
      </div>
      <PlainButton
        className={styles.MoreButton}
        to={data.to}
        name={'Learn more'}
      />
    </div>
  );
};

export default Card;
