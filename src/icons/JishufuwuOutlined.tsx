import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import JishufuwuOutlined from '../defines/asn/JishufuwuOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={JishufuwuOutlined} />;
}
