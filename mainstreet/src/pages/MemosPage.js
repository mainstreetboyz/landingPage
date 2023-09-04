import { Container } from '@mui/material'
import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';


export default function MemosPage() {

	const [numPages, setNumPages] = useState(null);
  	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = (numPages) => {
		console.log(numPages)
		// setNumPages(numPages);
	}

  return (
    <Container disableGutters style={{backgroundColor: 'whitesmoke', height:'100%'}}>
    </Container>
  );
}
