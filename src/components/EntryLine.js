import React from 'react';
import {
    Grid,
    Icon,
    Segment,
} from 'semantic-ui-react';

const EntryLine = (props) => {
    const {
        description,
        isExpense,
        value,
    } = props;
    return (
        <Segment color={(isExpense) ? 'red' : 'green'}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column
                        width={10}
                        textAlign="left"
                    >
                        {description}
                    </Grid.Column>
                    <Grid.Column width={3}>{value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon
                            name="edit"
                            bordered
                        />
                        <Icon
                            name="trash"
                            bordered
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default EntryLine;