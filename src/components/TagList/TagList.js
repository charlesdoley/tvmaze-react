import React from 'react'
export default function TagList({tag}) {
    return (
        <span data-testid="tag" >
            {tag}
        </span>
    )
}
