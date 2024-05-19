import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import DiffOutlined from '../defines/asn/DiffOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={DiffOutlined} />;
}
