import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import LimitOfAuthorityOutlined from '../defines/asn/LimitOfAuthorityOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={LimitOfAuthorityOutlined} />;
}
