import React, { useEffect, useRef } from 'react';

export default function GoogleAdsense() {
  const adContainerRef = useRef(null);

  useEffect(() => {
    try {
      // 如果 adsbygoogle 脚本已加载，推送广告
      if (window.adsbygoogle) {
        // 只有当广告尚未初始化时才推送广告
        if (adContainerRef.current && adContainerRef.current.dataset.adInitialized !== 'true') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adContainerRef.current.dataset.adInitialized = 'true';
        }
      }
    } catch (error) {
      console.error('Error initializing Google AdSense:', error);
    }
  }, []);

  return (
    <div className="google-adsense-container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      {/* 展示广告 */}
      <ins
        ref={adContainerRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5686832782200002"
        data-ad-slot="1204145775"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
