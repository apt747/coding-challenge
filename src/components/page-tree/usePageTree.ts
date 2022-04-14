import {useState} from "react";

export const usePageTree = () => {
    const [collapsed, setCollapsed] = useState<Record<string, boolean> | undefined>();

    return {collapsed, setCollapsed}
}