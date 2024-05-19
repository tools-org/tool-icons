import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import QrcodeOutlined from '../defines/asn/QrcodeOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={QrcodeOutlined} />;
}
