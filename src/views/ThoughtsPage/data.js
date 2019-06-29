import gql from 'graphql-tag';
import {ThoughtFragment} from 'gql/fragments';

export const ThoughtsQuery = gql`query {
    allThoughts(filter: {published:true}, orderBy: createdAt_DESC) {
        ...Thought
    }
}
${ThoughtFragment}
`;