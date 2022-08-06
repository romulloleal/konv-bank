import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 2em;
  background-color: #dedede;
  border-radius: 8px;
`
