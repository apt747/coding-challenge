import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FC, ReactNode} from "react";

interface Props {
    children?: ReactNode;
}

export const AppRouter: FC<Props> = ({children}) => {
    return (
        <BrowserRouter basename={''}>
            <Routes>

            </Routes>
            {children}
        </BrowserRouter>
    )
}