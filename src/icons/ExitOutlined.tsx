import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import ExitOutlined from '../defines/asn/ExitOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={ExitOutlined} />;
}