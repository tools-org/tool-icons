'use client';
import * as React from 'react';
import type { AbstractNode, IconDefinition } from '../defines/types';
import { generate } from '../utils';

export interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
}

export interface IconBaseProps extends IconProps {
  icon: IconDefinition;
}

const IconBase: React.FC<IconBaseProps> = (props) => {
  const {
    icon,
    className,
    onClick = () => {},
    style = {},
    svgStyle = {},
    ...restProps
  } = props;



  let target = icon;

  return (
    <span
      className="fett-icon"
      role="img"
      aria-label={target.name}
      style={style}
    >
      {generate(target.icon as AbstractNode, `svg-${target.name}`, {
        className,
        onClick,
        style: svgStyle,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
        ...restProps
      })}
    </span>
  );
};

IconBase.displayName = 'IconBase';

export default IconBase;
