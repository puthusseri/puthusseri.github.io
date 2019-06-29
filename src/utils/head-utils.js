import SEO from 'data/seo';

const defaultMeta = {
  title: SEO.TITLE,
  description: SEO.DESCRIPTION,
  image: SEO.IMAGE,
  url: SEO.URL
};

const getFacebookMeta = ({title, description, image, url}) => [
  {name: 'og:type', content: 'website'},
  {name: 'og:url', content: url},
  {name: 'og:title', content: title},
  {name: 'og:description', content: description},
  {name: 'og:image', content: image}
];

const getTwitterMeta = ({title, description, image, url}) => [
  {name: 'twitter:card', content: 'summary_large_image'},
  {name: 'twitter:site', content: url},
  {name: 'twitter:creator', content: SEO.TWITTER_USERNAME},
  {name: 'twitter:title', content: title},
  {name: 'twitter:description', content: description},
  {name: 'twitter:image', content: image}
];

export const getMeta = props => {
  let finalProps = {
    ...defaultMeta,
    ...props
  };

  return [
    ...getFacebookMeta(finalProps),
    ...getTwitterMeta(finalProps),
  ]
}
