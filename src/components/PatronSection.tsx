import * as React from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'
import * as patronsJson from '../data/patrons.json'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px;
  box-shadow: 0 0 16px 0 rgba(32, 32, 47, 0.1);
  background: #23233f;
`

const ImageRow = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 145px;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
  background: white;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  color: white;
  background: #23233f;
`

const Link = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 5px;
  a {
    color: goldenrod;
    text-decoration: none;
  }
`

const Body = styled.div`
  padding: 30px 20px;
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 15px;
  white-space: pre-line;
  line-height: 1.6;
`

interface PatronData {
  image: string
  title: string
  link: string
  url: string
  content: string
}

const PatronCard: React.StatelessComponent<PatronData> = ({
  image,
  title,
  link,
  url,
  content
}) => (
  <Card>
    <ImageRow>
      <Image src={image} />
    </ImageRow>
    <Title>{title}</Title>
    <Link>
      <a target="_blank" href={url}>
        {link}
      </a>
    </Link>
    <Body>{content}</Body>
  </Card>
)

const PatronSection: React.StatelessComponent<{}> = () => (
  <SectionTemplate title="후원" iconClass="fa fa-star fa-2x">
    <Wrapper>
      {patronsJson.patrons.map((patron: PatronData) => {
        return <PatronCard key={patron.title} {...patron} />
      })}
    </Wrapper>
  </SectionTemplate>
)

export default PatronSection
