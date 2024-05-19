import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import ExitFullScreenOutlined from '../defines/asn/ExitFullScreenOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={ExitFullScreenOutlined} />;
}
