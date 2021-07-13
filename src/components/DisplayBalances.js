import React from 'react';
import {
    Segment,
    Grid
} from 'semantic-ui-react';

import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
    return (
        <Segment textAlign="center">
            <Grid
                columns={2}
                divided
            >
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance
                            color="green"
                            label="Income:"
                            size="tiny"
                            value="2700.20"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance
                            color="red"
                            label="Expenses:"
                            size="tiny"
                            value="2700.00"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances;