import {formatDate} from 'utils/date-utils';

class Thought {

  id;
  title;
  slug;
  content;
  coverImageUrl;
  createdAt;
  tags = [];

  constructor(props) {
    this.content = props.content;
    this.createdAt = formatDate(new Date(props.createdAt), 'MM.dd.YYYY HH:mm');
    this.slug = props.slug;
    this.title = props.title;
    this.id = props.id;
    this.coverImageUrl = props.coverImageUrl;

    this.tags = props.tags ?
      props.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '')
      : null;
  }

}

export default Thought;