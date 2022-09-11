import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const VacancyDetails = (props) => {
  
    return (
    
        <>
        
            <section className='VacancyDetail'>

                <Container>

                    <Row>

                 
                 <div dangerouslySetInnerHTML={ {__html: props.text} } />

                    </Row>

                   

                   
                    
                </Container>

                

            </section>

        </>

    )

}

export default VacancyDetails