import gql from 'graphql-tag';

export const ThoughtFragment = gql`
    fragment Thought on Thought {
        id
        slug
        title
        content
        tags
        createdAt
    }
`