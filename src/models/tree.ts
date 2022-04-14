// @ts-ignore
interface PageTree extends Omit<TreeData, 'children'> {
    children?: TreeData[]
}

interface TreeData {
    id: string;
    name: string;
    children?: TreeData[]
}