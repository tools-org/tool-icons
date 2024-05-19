import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import ColorOutlined from '../defines/asn/ColorOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={ColorOutlined} />;
}
