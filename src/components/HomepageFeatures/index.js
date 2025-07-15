import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/grass.svg').default,
    description: (
      <>
        从零开始的手把手教程，简单明了的指引让玩家也能快速上手，轻松开始自己的Minecraft服务器旅途。
      </>
    ),
  },
  {
    title: '详细全面',
    Svg: require('@site/static/img/crafting-table.svg').default,
    description: (
      <>
        涵盖服务器命令、游戏技巧等方方面面，提供深入的指导和丰富的技巧，助你从新手成长为全服第一。
      </>
    ),
  },
  {
    title: '持续更新',
    Svg: require('@site/static/img/furnace.svg').default,
    description: (
      <>
        内容紧跟Minecraft最新版本，定期更新游戏教程和最佳实践，确保你获取最前沿的我的世界知识。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
