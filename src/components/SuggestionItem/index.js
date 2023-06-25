// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, updateSearchInput} = props
  const {suggestion} = searchDetails

  const onClickSuggestionButton = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion_lists">
      <p className="para">{suggestion}</p>
      <button
        className="button"
        type="button"
        onClick={onClickSuggestionButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
