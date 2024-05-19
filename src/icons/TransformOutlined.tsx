import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import TransformOutlined from '../defines/asn/TransformOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={TransformOutlined} />;
}
