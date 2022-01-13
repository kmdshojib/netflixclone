import React from 'react';
import { faqData } from '../../fixtures/faqs';

import OptForm from '../opt-form/optForm.index'
import Accordion from './accordion.index'

const FaqsContainer = () => {
    return ( 
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>

            {faqData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />

            <OptForm>
            <OptForm.Text>Ready to watch?Enter your Email address to restart your membership.</OptForm.Text>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Get Started</OptForm.Button>
                <OptForm.Break />
               
            </OptForm>
        </Accordion>
     );
}
 
export default FaqsContainer;