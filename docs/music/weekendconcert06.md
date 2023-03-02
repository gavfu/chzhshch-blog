---
id: weekendconcert06
title: ''
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import {AudioPlayerControlSprite, AudioPlayer, TrackType} from 'react-audio-player-pro';
import reactAudioPlayerProStyle from 'react-audio-player-pro/dist/style.css';

export const audioTrackList = [
{
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/1.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9A%E5%A4%A7%E8%B0%83%E7%AC%AC%E4%BA%94%E5%B0%8F%E6%8F%90%E7%90%B4%E5%8D%8F%E5%A5%8F%E6%9B%B21.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特A大调第五小提琴协奏曲1',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/3.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9A%E5%A4%A7%E8%B0%83%E7%AC%AC%E4%BA%94%E5%B0%8F%E6%8F%90%E7%90%B4%E5%8D%8F%E5%A5%8F%E6%9B%B22.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特A大调第五小提琴协奏曲2',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/4.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9A%E5%A4%A7%E8%B0%83%E7%AC%AC%E4%BA%94%E5%B0%8F%E6%8F%90%E7%90%B4%E5%8D%8F%E5%A5%8F%E6%9B%B23.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特A大调第五小提琴协奏曲3',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/5.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9C%E5%A4%A7%E8%B0%83%E7%AC%AC41%E4%BA%A4%E5%93%8D%E4%B9%90%201.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特C大调第41交响乐1',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/6.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9C%E5%A4%A7%E8%B0%83%E7%AC%AC41%E4%BA%A4%E5%93%8D%E4%B9%90%202.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特C大调第41交响乐2',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/7.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9C%E5%A4%A7%E8%B0%83%E7%AC%AC41%E4%BA%A4%E5%93%8D%E4%B9%90%203.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特C大调第41交响乐3',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/8.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9C%E5%A4%A7%E8%B0%83%E7%AC%AC41%E4%BA%A4%E5%93%8D%E4%B9%90%204.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特C大调第41交响乐4',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/9.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9D%E5%A4%A7%E8%B0%8326%E9%92%A2%E7%90%B4%E5%8D%8F%E5%A5%8F%E6%9B%B21.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特D大调26钢琴协奏曲1',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/10.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9D%E5%A4%A7%E8%B0%8326%E9%92%A2%E7%90%B4%E5%8D%8F%E5%A5%8F%E6%9B%B22.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特D大调26钢琴协奏曲2',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/11.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9D%E5%A4%A7%E8%B0%8326%E9%92%A2%E7%90%B4%E5%8D%8F%E5%A5%8F%E6%9B%B23.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特D大调26钢琴协奏曲3',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/12.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9G%E5%A4%A7%E8%B0%83%E5%BC%A6%E4%B9%90%E5%B0%8F%E5%A4%9C%E6%9B%B2%201.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特G大调弦乐小夜曲1',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/13.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9G%E5%A4%A7%E8%B0%83%E5%BC%A6%E4%B9%90%E5%B0%8F%E5%A4%9C%E6%9B%B2%202.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特G大调弦乐小夜曲2',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/14.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9G%E5%A4%A7%E8%B0%83%E5%BC%A6%E4%B9%90%E5%B0%8F%E5%A4%9C%E6%9B%B2%203.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特G大调弦乐小夜曲3',
      artist: '莫扎特'
    },
  },
  {
    src: 'https://ipfsgw.live/ipfs/QmYJjan7uQcBrSNddnEL5C19wEXdY8tg2Sk8eYWmkYY4QY/15.%E5%91%A8%E6%9C%AB%E9%9F%B3%E4%B9%90%E4%BC%9A6%EF%BC%9A%E8%8E%AB%E6%89%8E%E7%89%B9G%E5%A4%A7%E8%B0%83%E5%BC%A6%E4%B9%90%E5%B0%8F%E5%A4%9C%E6%9B%B2%204.mp3',
    preload: 'auto',
    mediaMetadata: {
      title: '周末音乐会6：莫扎特G大调弦乐小夜曲4',
      artist: '莫扎特'
    },
  },
];

export function AudioPlayerComponent() {
  return (
    <>
      <AudioPlayerControlSprite/>
      <AudioPlayer
        trackList={audioTrackList}
        className="my-class-name"
        defaultState={{
          isMuted: false,
          activeIndex: 0,
          isShuffleOn: false,
          isTrackListOpen: true,
          repeatingState: "none"
        }}
      />
    </>
  );
}

# 周末音乐会6：天使莫扎特

> 2006/8/25 17:17:47

<div style={{textAlign: 'center'}}>
<img src={useBaseUrl('/img/music/weekendconcert06/1.jpeg')} /><br/><br/>
</div>

从来没有什么天使，但人们更愿意相信，如果真有天使，那么天使下来时奏的音乐一定是莫扎特式的。今年是莫扎特一个重要的周年纪念，全世界都为他忙碌着。我们也不能没有任何表示。
 
说实在，本ID并不太喜欢莫扎特的音乐，这种音乐肯定是平衡的、优雅的、天使的、明亮的等等，但仿佛太粉饰太平了，这世界什么时候曾经平衡的、优雅的、天使的、明亮的？人的心灵又有哪一刻能平衡的、优雅的、天使的、明亮的？特别在现代社会里，莫扎特的音乐更像一些无聊的幻想，人类的心灵不需要这种虚假的治疗，一个太过明亮的梦往往比刀子更残忍！

如果换了另外一个人，莫扎特的音乐根本没有任何意义，但正因为他是莫扎特，所以他的音乐依然是最伟大的音乐，因为莫扎特在这表面平衡的、优雅的、天使的、明亮的音乐中，用他的天才注入人类的灵魂，在那平衡的、优雅的、天使的、明亮的音乐中依然反射着现实世界最不安的悸动。这带着人间气息的悸动成为莫扎特音乐永恒的真正秘密。

莫扎特是音乐上的全能冠军，在所有当时已经有的并保留下来的音乐题材中，在所有领域，莫扎特基本都是前三名，最差也是前五。当然，仔细想，莫扎特能拿第一的项目可能不多，但全能冠军是一点问题都没有的。贝多芬在歌剧方面就很不行，舒伯特在协奏曲方面基本就没怎么写，其它人的弱项就更多了。大概还有一个在各方面都能写的就是柴可夫斯基了，大概除了GAY方面和莫扎特音乐的GAY有点英文上的关系，他和莫扎特音乐成就上没有任何可比性（芭蕾音乐在莫扎特时代还没发育好），音乐外却有点类似，一个是短命的天才，一个是为了GAY而不能GAY最后因GAY而死的冤男，总之都没有善终。

莫扎特写的东西太多了，我这里有他的全集，还有一套精选，而他的所谓名曲也太多，这里选择了四部最莫扎特的作品，都是大调，包括：大概所有人都听过的G大调弦乐小夜曲、D大调26钢琴协奏曲、A大调第五小提琴协奏曲、C大调41交响曲（突然发现拼音输入的设计者大概是一个乐盲，竟然交响乐不是一个词语，还有莫扎特也不是，贝多芬是，简直毛病！）

请把所有背景音乐关闭

<AudioPlayerComponent />

### 回复

<div class='blog-comment'>
<span class='blog-comment-chan'>缠中说禅</span> 2006/8/26 16:32:31<br/>

对不起，昨天上传的网站有点问题，今天应该能完全听到！
</div>