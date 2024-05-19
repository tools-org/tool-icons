import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import CopyOutlined from '../defines/asn/CopyOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={CopyOutlined} />;
}
