import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import QuestionOutlined from '../defines/asn/QuestionOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={QuestionOutlined} />;
}
