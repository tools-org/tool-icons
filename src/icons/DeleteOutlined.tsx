import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import DeleteOutlined from '../defines/asn/DeleteOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={DeleteOutlined} />;
}
