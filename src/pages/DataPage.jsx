import { Container } from '@mui/material'
import React from 'react'

function DataPage(props) {
  return (
    <>
        <Container sx={{fontSize: "30px"}}>
             <ul>
              {props.data.map((employee) => {
                return(
                  <>
                  
                    <li>Full Name: {employee.name.firstname} {employee.name.lastname}</li>
                      <ul>Favorite Dessert:
                          <ol>
                            {employee.favoriteDessert.map((sweet) =>
                            {
                              return(
                                <>
                                  <li>{sweet}</li>
                                </>
                              )
                            })}
                          </ol>
                      </ul>
                  </>
                )
              })}
            </ul>       
        </Container>
         
    </>
  )
}

export default DataPage
