import styled from 'styled-components'

export const ServicesContainer = styled.main`
  flex: 1;

  display: flex;
  width: 100%;

  flex-direction: column;
`

export const ServicesList = styled.div`
  display: flex;

  flex: 1;
  overflow: auto;
  margin-top: 2.5rem;

  table {
    width: 100%;
    text-align: left;
    color: ${(props) => props.theme['gray-100']};
    border-spacing: 0 1rem;
    font-weight: 400;

    thead {
      background-color: ${(props) => props.theme['gray-600']};
      height: 3.4rem;
    }

    tbody {
      background-color: ${(props) => props.theme['gray-600']};
      tr {
        height: 4.7rem;
      }
    }

    td, th {
      &:nth-child(1) {
        margin-left: 1rem;
      }
    }

    th, td {
      &:nth-child(1) {
        padding: 0 1.5rem;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
      }
      &:nth-child(5) {
        padding: 0 1rem;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
  }
`

export const Options = styled.div`
  cursor: pointer;
`
