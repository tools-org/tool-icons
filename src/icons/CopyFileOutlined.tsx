import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import CopyFileOutlined from '../defines/asn/CopyFileOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={CopyFileOutlined} />;
}
