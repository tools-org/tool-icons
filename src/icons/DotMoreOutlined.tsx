import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import DotMoreOutlined from '../defines/asn/DotMoreOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={DotMoreOutlined} />;
}
