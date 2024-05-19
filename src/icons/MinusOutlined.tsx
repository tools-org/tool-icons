import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import MinusOutlined from '../defines/asn/MinusOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={MinusOutlined} />;
}
