import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import SearchFileOutlined from '../defines/asn/SearchFileOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={SearchFileOutlined} />;
}
