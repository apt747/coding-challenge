import {FC, Fragment, ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

import './styles.css';
import {usePageTree} from "./usePageTree";

type Props = {
    data: PageTree[]
}

/**
 * Incomplete
 */
export const PageTree: FC<Props> = ({data}) => {
    const {collapsed, setCollapsed} = usePageTree();


    const handleOnListClick = (id: string, hasChildren: boolean) => {
        if (hasChildren) {
            setCollapsed({[id]: !collapsed?.[id]});
        }
    }

    const getCollapseIcon = (id: string, level: number) => {
        const margin = level === 0 ? '-1.2em' : `${level * 0.1}em`
        const icon = collapsed?.[id] ? faCaretUp : faCaretDown;

        return <FontAwesomeIcon icon={icon} className="collapse-icon" style={{marginLeft: margin}}/>
    }

    const getListItem = (treeData: TreeData, level: number) => {
        const { id } = treeData;
        const hasChildren = !!treeData.children;
        const listStyle = hasChildren ? 'none' : 'disc';
        const margin = level === 0 ? '0' : `${level * 1.2}em`


        return (
            <span key={`span-${id}`} onClick={() => handleOnListClick(id, hasChildren)} style={{cursor: hasChildren ? 'pointer' : 'auto'}}>
                {hasChildren && getCollapseIcon(id, 0)}
                <li key={id}
                    data-testid={`list-${id}`}
                    style={{listStyle, marginLeft: margin}}>
                    {treeData.name}
                </li>
            </span>
        )
    }

    const getChildren = (pageTree: TreeData[], level: number): ReactNode => {
        return pageTree.map(tree => {
            if (tree.children) {
                return (
                    <Fragment key={tree.id}>
                        {getCollapseIcon(tree.id, level)}
                        {getListItem(tree, level)}
                        {getChildren(tree.children, level + 1)}
                    </Fragment>
                )
            } else {
                return (getListItem(tree, level))
            }
        })

    }

    const getTree = () => {
        return data.map(treeData => {
            return (
                <Fragment key={`tree-${treeData.id}`}>
                    {getListItem(treeData, 0)}
                    {treeData.children && getChildren(treeData.children, 1)}
                </Fragment>
            )
        })
    }

    return (
        <div>
            {data && (
                <ul data-testid="page-tree-list">
                    {getTree()}
                </ul>
            )}
        </div>
    )
}