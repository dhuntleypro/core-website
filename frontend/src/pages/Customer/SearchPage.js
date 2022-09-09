import React from 'react';
// import styled from 'styled-components';
// import PageHeader from '../../components/Sections/PageHeader';
// import ListOfCategories from '../../components/Store/Categories/LoopContainer/ListOfCategories';
import SearchCategory from '../../components/Pages/Search';
// import SearchScreen from '../../components/Pages/Search/SearchScreen';

const SearchPage = () => {
  return (
    <>
      {/* <PageHeader /> */}
      <div style={{ padding: '50px', paddingTop: '50px' }}>
        {/* <SearchScreen /> */}
        <SearchCategory />
      </div>
    </>
  );
};

export default SearchPage;
