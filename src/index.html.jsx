/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import Html from './layout/html.html.jsx'
import styles from '../data/styles.json'

const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
  position: relative;
  white-space: nowrap;
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: ${styles.mainColor};
    width: 100%;
    height: 20%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &:hover {
    &::after {
      height: 100%;
    }
  }
`

const P = styled.p`
  font-size: 1.3em;
  line-height: 2em;
`

export default ({ data, env }) => (
  <Html
    title="Adenine Griffin"
    style={css`
      padding: 10vh 40% 0 5%;
      font-size: calc(10px + 0.4vw);
      @media only screen and (max-width: 600px) {
        padding: 0 20% 0 5%;
      }
    `}>
    <h1
      css={css`
        font-size: 5em;
      `}>
      Hi
    </h1>
    <h3
      css={css`
        font-size: 3em;
      `}>
      My name is Adenine
    </h3>
    <P>
      I'm a software developer, currently interested in practical graphics
      applications and user interaction with those applications.
    </P>
    <P css={css`
      a {
        margin-right: 1em;
      }
    `}>
      <Link href="./resume.pdf">Resume</Link>
    </P>
    <canvas
      id="canvas"
      css={css`
        position: absolute;
        bottom: 0;
        right: 0;
        pointer-events: none;
        z-index: -1;
      `}></canvas>

    <script src="script/index_canvas.js"></script>
  </Html>
)
