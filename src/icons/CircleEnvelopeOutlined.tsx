import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import CircleEnvelopeOutLined from '../defines/asn/CircleEnvelopeOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={CircleEnvelopeOutLined} />;
}
