import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import SuggestionOutlined from '../defines/asn/SuggestionOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={SuggestionOutlined} />;
}
