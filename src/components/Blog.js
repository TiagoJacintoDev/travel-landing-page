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
  font-family: ${v.ff.default};
  color: white;
  background-color: ${v.color.lightDark};
`;

const BlogPost = styled.div`
  padding-left: ${v.size.smaller};
  padding-block: ${v.size.smaller};
  margin-bottom: ${v.size.smaller};
  &[data-selected='true'] {
    background-color: white;
    color: black;
  }
`;

const BlogDate = styled.p`
  font-size: ${v.fs.medium};
`;

const BlogTitle = styled.h3`
  font-size: ${v.fs.large};
  font-weight: ${v.fw.bold};
`;

export default function Blog() {
  const [blogPostSelected, setBlogPostSelected] = useState(1);

  function changePost(blogPostId) {
    setBlogPostSelected(blogPostId);
  }

  return (
    <Wrapper>
      <Container>
        <Title style={{ textAlign: 'center' }}>
          Read our awesome blog post for everyone
        </Title>
        <Paragraph
          style={{ textAlign: 'center', marginBottom: `${v.size.smaller}` }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
          dolor.
        </Paragraph>
        <Grid gap={v.size.medium}>
          <div>
            {blogData.map(blogPost => (
              <BlogPost
                onClick={() => changePost(blogPost.id)}
                data-selected={blogPost.id === blogPostSelected}
              >
                <BlogDate>{blogPost.date}</BlogDate>
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
                    <SubTitle>{blogPost.title}</SubTitle>
                    <Paragraph>{blogPost.paragraph}</Paragraph>
                  </>
                )
            )}
          </div>
        </Grid>
      </Container>
    </Wrapper>
  );
}
