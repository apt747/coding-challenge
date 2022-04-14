import React from 'react';
import { PageTree } from './components/page-tree/PageTree';
import {useTreeFetch} from "./common/fetch";

function App() {
    const {data, error} = useTreeFetch();

    return (
        <div>
            {error && <h3 data-testid="error-message">{error}</h3>}
            <PageTree data={data} />
        </div>
    );
}

export default App;
