import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import InfoOutlined from '../defines/asn/InfoOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={InfoOutlined} />;
}
