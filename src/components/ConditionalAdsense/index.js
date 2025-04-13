import React from 'react';
import { useLocation } from '@docusaurus/router';
import GoogleAdsense from '../GoogleAdsense';
import { adsenseConfig } from '../../adsenseConfig';

export default function ConditionalAdsense() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const shouldShowAdsense = adsenseConfig.shouldShowAdsense(currentPath);
  
  // console.log('Current path:', currentPath);
  // console.log('Should show ads:', shouldShowAdsense);
  
  return shouldShowAdsense ? <GoogleAdsense /> : null;
}
