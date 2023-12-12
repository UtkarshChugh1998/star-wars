import { useState } from 'react'
export const Element = (props: any) => {
  const { label, value, isEditable } = props
  const [editMode, setEditMode] = useState<boolean>(false)
  const [currentValue, setValue] = useState<any>(value)
  const handleClick = () => {
    setEditMode(true)
  }
  return (
    <>
      {isEditable ? (
        !editMode ? (
          <div
            className="element"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >
            {label}: {currentValue}{' '}
            <span style={{ fontSize: '8px' }}>(edit)</span>
          </div>
        ) : (
          <div className="element">
            {label}:
            <input
              type="text"
              value={currentValue}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => setEditMode(false)}>Submit Value</button>
          </div>
        )
      ) : (
        <div className="element">
          {label}: {currentValue}
        </div>
      )}
    </>
  )
}
