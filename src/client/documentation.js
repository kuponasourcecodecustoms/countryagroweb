import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile} from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import './documentation.css'

const documentList = [
  {documentName: 'COUNTRY AGRO TRANSPORT PROFILE.pdf',
  uri: 'COUNTRY AGRO TRANSPORT PROFILE.pdf',
  description: 'Detailed summary of company\'s history, operations, and activities'
  },
  {documentName: 'COUNTRY AGRO TRANSPORT PROFILE- 2024.docx',
  uri: 'COUNTRY AGRO TRANSPORT PROFILE- 2024.docx',
  description: 'Detailed summary of company\'s history, operations, and activities'
  },
]

const onButtonClick = (passedDocument) => {   
  // using Java Script method to get PDF file
  fetch(passedDocument?.uri).then((response) => {
       response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL =
              window.URL.createObjectURL(blob);              
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = passedDocument?.documentName;
          alink.click();
      })
  })
}

export const Documentation = () =>(
  <div className='documentation'>
    <NavBar/>
    <div className='mainBody'>
    <table className='documentTable'>
      <tr>
        <th>Document Name</th>
        <th>Document Description</th>
      </tr>
    {documentList.map(document => (
      <>
      <tr>
      <td>
       <button onClick={() => onButtonClick(document)}>
          <FontAwesomeIcon icon={faFile}/>
          {document?.documentName}
      </button>
      </td>
      <td className='documentDescription'>{document?.description}</td>
    </tr>
    </>
    ))}
    </table>
    </div>
    <Footer/>
  </div>
)
