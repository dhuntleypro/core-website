import React from 'react';
import styled from 'styled-components';
import AllRoutes from '../../AllRoutes';
import { PageColumn2 } from '../../components/CustomStyles/PageColumn';
import PageHeader from '../../components/PageHeader';

const SidebarColumn = styled.div`
  /* position: fixed; */
`;

const MainColumn = styled.div`
  /* position: fixed; */
`;
const DashboardControls = () => {
  return (
    <>
      <PageColumn2>
        <SidebarColumn>Side bar</SidebarColumn>
        <MainColumn>
          <AllRoutes />
        </MainColumn>
      </PageColumn2>
    </>
  );
};

export default DashboardControls;
