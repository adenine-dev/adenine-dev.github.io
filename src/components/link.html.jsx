import styled from '@emotion/styled'
import styles from '../../data/styles.json'

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

export default Link
