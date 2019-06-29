import React from 'react';
import {FeaturedLinks} from './styles';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const OKGoogle = () => (
  <Project
    title="ok-google.io"
    href="http://ok-google.io"
  >
    <Point> Explore over 150 Google Now voice commands interactively in one place. </Point>
    <Point>
      <UnderlinedLink
        href="https://www.producthunt.com/tech/ok-google"
        target="_blank"
      >
        #1 on Product Hunt
      </UnderlinedLink> with <b>>1200</b> upvotes.
    </Point>
    <Point> More than <b>4000</b> upvotes <UnderlinedLink
      href="https://www.reddit.com/r/Android/comments/4qebru/ok_google_explore_over_150_google_now_voice/"
      target="_blank">
      on Reddit!
    </UnderlinedLink>
    </Point>
    <Point>
      <b>500.000</b> unique visitors in few days.
    </Point>
    <Point>#6 on <UnderlinedLink
      href="https://medium.com/product-hunt/the-44-most-loved-products-launched-in-summer-2016-deaa36125316#.aq221ahht"
      target="_blank"
    >
      The 44 Most-Loved Products Launched in Summer 2016 </UnderlinedLink>
    </Point>

    <FeaturedLinks>
      Featured on:
      <UnderlinedLink href="http://www.theverge.com/2016/6/30/12064794/ok-google-commands" target="_blank">
        The Verge
      </UnderlinedLink>
      -
      <UnderlinedLink href="https://techcrunch.com/2016/06/29/ok-google-tea-earl-grey-hot/" target="_blank">
        TechCrunch
      </UnderlinedLink> -
      <UnderlinedLink href="http://www.androidpolice.com/2016/06/29/amazing-site-lists-nearly-every-ok-google-voice-command/" target="_blank">
        Android Police
      </UnderlinedLink> -
      <UnderlinedLink href="https://9to5google.com/2016/06/29/complete-list-ok-google-commands/" target="_blank">
        9to5 Google
      </UnderlinedLink>
      -
      <UnderlinedLink href="http://pocketnow.com/2016/06/29/interactive-way-to-learn-ok-google-commands" target="_blank">
        Pocket Now
      </UnderlinedLink>
      -
      <UnderlinedLink href="http://www.androidcentral.com/heres-list-ok-google-commands-youve-probably-never-used" target="_blank">
        Android Central
      </UnderlinedLink>
    </FeaturedLinks>

  </Project>
);

export default OKGoogle;