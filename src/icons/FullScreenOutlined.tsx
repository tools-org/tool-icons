import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import FullScreenOutlined from '../defines/asn/FullScreenOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={FullScreenOutlined} />;
}
