import React from 'react'

export const RenderComponent = ({Item, data, loading}) => {
  return (
    <React.Fragment>
      {loading ? (
          <div>loading...</div>
      ):(
        data.map(item =>  (
          <Item {...item} />
        ))
      )}
    </React.Fragment>
  )
}