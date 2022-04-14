import {PageTree} from './PageTree';
import {render, screen} from "@testing-library/react";
import {backendData} from "./test-utils";

describe('Page Tree Tests', () => {
    it('', async () => {
        // if no children, no sub-bullets
        render(<PageTree data={backendData} />)

        expect(screen.getByTestId('page-tree-list')).toBeInTheDocument();

        backendData.forEach((item, index) => {
            expect(screen.getByTestId(`list-${item.id}`)).toHaveTextContent(item.name);
        })

        //icon test tbd


        //collapsible if parent and no children

        // error handling to user
    })
})