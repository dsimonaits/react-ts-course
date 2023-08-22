import React, { FC, PropsWithChildren } from 'react';

interface ListProps<T> extends PropsWithChildren {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
    return (
        <ul>
            {props.items.map(props.renderItem)}
        </ul>
    )

}

export default List;