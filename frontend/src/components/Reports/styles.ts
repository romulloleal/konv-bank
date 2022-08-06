import styled from 'styled-components'

export const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const ReportItems = styled.div<{ reportType: string }>`
  text-align: center;
  width: 300px;
  background-color: ${({ reportType }) =>
    reportType === 'in' ? '#B6FCCA' : '#FAD1D1'};
  padding: 10px;
  border-radius: 5px;
`
export const ReportAmount = styled.div``

export const ReportDate = styled.div`
  font-size: 0.85em;
`
