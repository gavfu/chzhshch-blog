import React from 'react';
import Content from '@theme-original/DocItem/Content';
import ConditionalAdsense from '../../../components/ConditionalAdsense';

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <ConditionalAdsense />
    </>
  );
}
