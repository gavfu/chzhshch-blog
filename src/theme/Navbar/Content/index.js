import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';

const rawHTML = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5686832782200002"
     crossorigin="anonymous"></script>
<!-- 我的展示广告-横向 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:250px;height:50px"
     data-ad-client="ca-pub-5686832782200002"
     data-ad-slot="1204145775"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
`;


function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}
function NavbarContentLayout({left, right}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">
        {left}
        {/* <div style={{flexGrow: 1, height: "100%"}} dangerouslySetInnerHTML={{ __html: rawHTML }}></div> */}
        <div style={{width: '250px', height: "50px", padding: 0}} dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

/**
 * $ yarn swizzle @docusaurus/theme-classic Navbar/Content -- --eject
 */
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          
        </>
      }
    />
  );
}
