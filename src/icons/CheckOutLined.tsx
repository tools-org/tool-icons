import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import CheckOutLined from '../defines/asn/CheckOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={CheckOutLined} />;
}
