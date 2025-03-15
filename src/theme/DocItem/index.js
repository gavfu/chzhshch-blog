import React from 'react';
import DocItem from '@theme-original/DocItem';
import GoogleAdsense from '../../components/GoogleAdsense';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      {/* <GoogleAdsense /> */}
    </>
  );
}
