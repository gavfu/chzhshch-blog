import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

const rawHTML = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5686832782200002"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-5686832782200002"
     data-ad-slot="9479333372"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
`;


/**
 * Created via command (https://docusaurus.io/docs/swizzling):
 * 
 * $ yarn swizzle @docusaurus/theme-classic TOC -- --eject
 */
export default function TOC({className, ...props}) {
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: rawHTML }}>
      </div> */}
    </div>
  );
}
