import gql from 'graphql-tag';
import {ThoughtFragment} from 'gql/fragments';

export const ThoughtQuery = gql`query($slug: String) {
    allThoughts(filter:{slug:$slug}){
        ...Thought
    }
}
${ThoughtFragment}
`;

export const options = ({store}) => {
  const {slug} = store.router.params;
  return {
    variables: {
      slug
    }
  }
};