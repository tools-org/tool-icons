import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import UpdateOutlined from '../defines/asn/UpdateOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={UpdateOutlined} />;
}
