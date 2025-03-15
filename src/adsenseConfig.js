/**
 * 广告配置
 * 列出所有不应该显示广告的页面路径
 */
export const adsenseConfig = {
  // 这些页面不会显示广告
  excludedPaths: [
    '/',
    '/donate',
    '/download'
    // 添加其他不想显示广告的页面
  ],
  
  // 检查页面是否应该显示广告
  shouldShowAdsense(path) {
    // 如果路径直接匹配或者以某个排除路径结尾，则不显示广告
    return false;
    // return !this.excludedPaths.some(excludedPath => 
    //   path === excludedPath || 
    //   path.endsWith(excludedPath)
    //   // || path.includes(excludedPath)
    // );
  }
};
