import * as React from 'react';
import type { AbstractNode, IconDefinition } from '../defines/types';
import { generate } from '../utils';

export interface IconProps {
  icon: IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  primaryColor?: string; // only for two-tone
  secondaryColor?: string; // only for two-tone
  focusable?: string;
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  calculated?: boolean; // marker for calculation
}

const twoToneColorPalette: TwoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors({
  primaryColor,
  secondaryColor,
}: TwoToneColorPaletteSetter) {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor;
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors(): TwoToneColorPalette {
  return {
    ...twoToneColorPalette,
  };
}

interface IconBaseComponent<P> extends React.FC<P> {
  getTwoToneColors: typeof getTwoToneColors;
  setTwoToneColors: typeof setTwoToneColors;
}

const IconBase: IconBaseComponent<IconProps> = (props) => {
  const {
    icon,
    className,
    onClick = () => {},
    style = {},
    svgStyle = {},
    ...restProps
  } = props;

  const svgRef = React.useRef<HTMLElement>();

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
        ...restProps,
        ref: svgRef,
      })}
    </span>
  );
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

export default IconBase;
