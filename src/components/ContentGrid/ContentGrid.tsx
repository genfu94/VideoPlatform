import React from "react";
import styled from '@emotion/styled'

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  justify-items: center;
`;

export const ContentGrid = ({children}: {children:any}) => {
  return (
    <GridLayout style={{maxWidth: 800}}>
      {children}
    </GridLayout>
  );
};