import React from "react";
import styled from 'styled-components';

const SearchFrame = styled.div`
	height: 80vh;
	width: 100vw;
	display: block;
	margin-left: 10%;
	margin-right: auto;
	margin-top: 1%;
`

const Search = () => {
return (
	<SearchFrame>
	
  <iframe id="advanced_iframe" name="iframe1" src="https://homeasap.com/chadtrapp" width="80%" height="715" frameborder="0" border="0" allowtransparency="true" title="chadsFrame"></iframe>
	
	</SearchFrame>
);
};

export default Search;
