import {
    Container,
    Grid,
    Icon,
    Segment,
} from "semantic-ui-react";

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
    return (
        <div className="App">
            <Container>
                <MainHeader
                    title="Budget"
                    type="h1"
                />
                <DisplayBalance
                    label="Your Budget"
                    size="small"
                    textAlign="center"
                    value="2500.25"
                />

                <DisplayBalances />

                <MainHeader
                    title="History"
                    type="h3"
                />

                <EntryLine
                    description="Expense"
                    isExpense
                    value="100.00"
                />

                <EntryLine
                    description="Details"
                    value="200.00"
                />
                
                <MainHeader
                    title="Add new transaction"
                    type="h3"
                />

                <NewEntryForm />  
            </Container>
        </div>
    );
}

export default App;
