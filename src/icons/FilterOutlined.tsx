import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import FilterOutlined from '../defines/asn/FilterOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={FilterOutlined} />;
}
