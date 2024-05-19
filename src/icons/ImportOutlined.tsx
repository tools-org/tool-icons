import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import ImportOutlined from '../defines/asn/ImportOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={ImportOutlined} />;
}
