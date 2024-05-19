import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import ClearOutlined from '../defines/asn/ClearOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={ClearOutlined} />;
}
