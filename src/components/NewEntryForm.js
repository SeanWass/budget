import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = (props) => {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon="tags"
                    placeholder="Description"
                    label="Description"
                    width={12}
                />

                <Form.Input
                    width={4}
                    label="Value"
                    placeholder="Enter Value"
                    icon="dollar"
                    iconPosition="left"
                />
            </Form.Group>

            <ButtonSaveOrCancel />
        </Form>
    );
}

export default NewEntryForm;