const buttonStyle = { backgroundColor: 'lightgreen' }

function ResetButton({ count, resetCount }) {
  return (
    <div>
      {!!count && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default ResetButton
