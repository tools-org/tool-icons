import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import SaveOutlined from '../defines/asn/SaveOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={SaveOutlined} />;
}
