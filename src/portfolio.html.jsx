/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react'
import Html from './layout/html.html.jsx'
import Main from './components/main.html.jsx'
import Link from './components/link.html.jsx'

const Img = props => (
  <a href={props.src}>
    <img src={props.src} alt={props.alt} />
  </a>
)

export default ({ data, env }) => (
  <Html
    title="blog"
    style={css`
      max-width: 720px;
      margin: 0 auto 64px;
      .imgset {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
        max-height: 240px;
        margin: 6px 0 0;
        img {
          padding: 0 4px;
          width: 100%;
        }
      }
    `}>
    <Main>
      <article
        class="markdown-body entry-content container-lg f5"
        itemprop="text">
        <h2 dir="auto">
          <a
            id="user-content-previous-work"
            class="anchor"
            aria-hidden="true"
            href="#previous-work"></a>
          Previous work:
        </h2>
        <p dir="auto">
          This is a sampling of the most prominent personal work I have done
          each year for the past several years and visual accompaniment to them.
          Some of the older code has been lost or cannot be linked. See my{' '}
          <Link href="./resume.pdf">resume</Link> for professional work I have
          done.
        </p>
        <h3 dir="auto">2023:</h3>
        <ul dir="auto">
          <li>
            <p dir="auto">
              <Link href="https://github.com/adenine-dev/luminiferous">
                Lumeniferous
              </Link>
              : A rust ray tracer being used to teach the fundamentals of
              production ray tracing.
              <div className="imgset">
                <Img
                  src="./imgs/253765964-83fe1ad7-5b96-48da-b8d8-0e6d0ed06166.png"
                  alt="image"
                  style={{
                    maxWidth: '100%',
                  }}
                />
                <Img
                  src="./imgs/253766483-fb77b1a7-79d9-4e68-b283-334f8a6a4c26.png"
                  alt="image"
                  style={{
                    maxWidth: '100%',
                  }}
                />
              </div>
            </p>
          </li>
          <li>
            <p dir="auto">
              <Link href="https://github.com/adenine-dev/rust-analyzer">
                Rust Analyzer Memory Layout Viewer
              </Link>
              : Added a recursive memory layout viewer to the rust analyzer
              language server.
            </p>
            <div className="imgset">
              <Img
                width="1496"
                alt="image"
                src="./imgs/253766534-19bfd144-3d37-41b1-8de7-0531a0bda9d3.png"
                style={{
                  maxWidth: '100%',
                }}
              />
            </div>
          </li>
        </ul>
        <h3 dir="auto">2022:</h3>
        <ul dir="auto">
          <li>
            <p dir="auto">
              <Link href="https://github.com/adenine-dev/heliochrome">
                Heliochrome
              </Link>
              : A rust ray tracer primarily drawn from ray tracing in one
              weekend.
              <div className="imgset">
                <Img
                  src="./imgs/253765011-47c651f5-f6f8-4df9-a8c5-8b3fe6439581.png"
                  alt="image"
                  style={{
                    maxWidth: '100%',
                  }}
                />
              </div>
            </p>
          </li>
          <li>
            <p dir="auto">
              <Link href="https://github.com/adenine-dev/pomegranate">
                Pomegranate
              </Link>
              : A C++ graphics engine utilizing vulkan as a graphics backend and
              minimal libraries.
              <div className="imgset">
                <Img
                  src="./imgs/253765329-411ad2c1-6bda-4c96-9606-3ccad9f02c6b.png"
                  alt="image"
                  style={{
                    maxWidth: '100%',
                  }}
                />
                <Img
                  src="./imgs/253765341-3694b22f-3cd9-4986-ab60-922f972e8907.png"
                  alt="image"
                  style={{
                    maxWidth: '100%',
                  }}
                />
              </div>
            </p>
          </li>
        </ul>
        <h3 dir="auto">2021:</h3>
        <ul dir="auto">
          <li>
            X.509 Implementation in javascript (Code not available): A limited
            implementation of the X.509 spec for a security course in
            university.
          </li>
          <li>
            <Link href="https://github.com/adenine-dev/shared-folders">
              Shared folders
            </Link>
            : A program that allows you to sync files across computers through
            TCP written collaboratively in python for a networking course in
            university.
          </li>
        </ul>
        <h3 dir="auto">2019:</h3>
        <ul dir="auto">
          <li>
            <Link href="https://github.com/adenine-dev/pure-md-editor">
              pure md editor
            </Link>
            : A web markdown editor written in react.js. Note that this was left
            in a broken state.
            <div className="imgset">
              <Img
                width="1496"
                alt="image"
                src="./imgs/253764340-eb08d7d4-c1f1-45e9-a12c-4345eff21310.png"
                style={{
                  maxWidth: '100%',
                }}
              />
              <Img
                width="1496"
                alt="image"
                src="./imgs/253764689-35700660-a5eb-44d5-a15f-3156a5ac0003.png"
                style={{
                  maxWidth: '100%',
                }}
              />
            </div>
          </li>
        </ul>

        <h3 dir="auto">2017:</h3>
        <ul dir="auto">
          <li>
            fire editor (source code lost): A gui save file format editor for
            the game fire emblem awakening written using vue.js
            <div className="imgset">
              <Img
                src="./imgs/253764080-309991f0-ce32-4831-bf5f-af3edac22afc.png"
                alt="image"
                style={{
                  maxWidth: '100%',
                }}
              />
            </div>
          </li>
        </ul>
        <Link href=".">Return Home</Link>
      </article>
    </Main>
  </Html>
)
