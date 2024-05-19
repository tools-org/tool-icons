import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import CompressOutlined from '../defines/asn/CompressOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={CompressOutlined} />;
}
