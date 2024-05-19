import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import JsonOutlined from '../defines/asn/JsonOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={JsonOutlined} />;
}
