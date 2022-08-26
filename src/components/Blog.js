import styled from 'styled-components';
import { variables as v } from '../styles/helpers/variables';
import {
  SubTitle,
  Paragraph,
  Container,
  Title,
} from '../styles/helpers/helpers';
import { blogData } from '../assets/data/blogData';
import { useState } from 'react';
import { Grid } from '../styles/layout/grid';

const Wrapper = styled.div`
  padding-bottom: ${v.size.smaller};
  @media (min-width: ${v.ds.tablet}) {
    padding-bottom: ${v.size.small};
  }
  font-family: ${v.ff.default};
  color: white;
  background-color: ${v.color.lightDark};
`;

const BlogPost = styled.div`
  padding-left: ${v.size.smallest};
  @media (min-width: ${v.ds.tablet}) {
    padding-left: ${v.size.smaller};
  }
  padding-block: ${v.size.smaller};
  &[data-selected='true'] {
    background-color: white;
    color: black;
  }
  &:last-of-type {
    margin-bottom: ${v.size.small};
  }
`;

const BlogDate = styled.p`
  font-size: ${v.fs.medium};
`;

const BlogTitle = styled.h3`
  font-size: ${v.fs.medium};
  @media (min-width: ${v.ds.tablet}) {
    font-size: ${v.fs.large};
  }
  font-weight: ${v.fw.bold};
`;

export default function Blog({ isMobile }) {
  const [blogPostSelected, setBlogPostSelected] = useState(1);

  function changePost(blogPostId) {
    setBlogPostSelected(blogPostId);
  }

  return (
    <Wrapper id='blog'>
      <Container>
        <Title style={{ textAlign: 'center', marginBottom: v.size.smaller }}>
          Read our awesome blog post for everyone
        </Title>
        <Paragraph
          style={{ textAlign: 'center', marginBottom: `${v.size.small}` }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          dolor.
        </Paragraph>
        <Grid gap={v.size.medium}>
          <div>
            {blogData.map(blogPost => (
              <BlogPost
                style={{ borderBottom: `1px solid ${v.color.lightGray}` }}
                onClick={() => changePost(blogPost.id)}
                data-selected={blogPost.id === blogPostSelected}
              >
                {!isMobile && <BlogDate>{blogPost.date}</BlogDate>}
                <BlogTitle>{blogPost.title}</BlogTitle>
              </BlogPost>
            ))}
          </div>

          <div>
            {blogData.map(
              blogPost =>
                blogPost.id === blogPostSelected && (
                  <>
                    <img
                      style={{ marginBottom: `${v.size.smaller}` }}
                      src={blogPost.img}
                    />
                    <SubTitle style={{ marginBottom: v.size.smaller }}>
                      {blogPost.title}
                    </SubTitle>
                    <Paragraph style={{ marginBottom: v.size.smaller }}>
                      {blogPost.paragraph}
                    </Paragraph>
                    {isMobile && <BlogDate>{blogPost.date}</BlogDate>}
                  </>
                )
            )}
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
}
