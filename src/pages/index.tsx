import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Hero from '../components/hero';
import Layout from '../components/layout';

const RootIndex = (props: any) => {
  const [person] = get(props, 'data.allContentfulPerson.edges');
  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Hero data={person.node} />
      </div>
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
