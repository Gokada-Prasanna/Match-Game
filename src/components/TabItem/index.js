import './index.css'

const TabItem = props => {
  const {key, tabDetails, setActiveTab} = props
  const {tabId, category, displayText} = tabDetails

  const onClickTab = () => {
    console.log(tabId)
    setActiveTab(tabId)
  }

  return (
    <li key={key}>
      <button
        type="button"
        className={`tab-button ${category === tabId ? 'highlight-text' : ''}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
