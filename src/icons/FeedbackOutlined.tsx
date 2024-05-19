import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import FeedbackOutlined from '../defines/asn/FeedbackOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={FeedbackOutlined} />;
}
