import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import SearchOutlined from '../defines/asn/SearchOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={SearchOutlined} />;
}
