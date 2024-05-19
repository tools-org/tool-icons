import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import RegularExpressionOutlined from '../defines/asn/RegularExpressionOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={RegularExpressionOutlined} />;
}
