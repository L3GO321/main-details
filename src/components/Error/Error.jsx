import { useSelector } from 'react-redux'

export const Error = ({ fetchData }) => {
  const { error } = useSelector(store => store)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '10px', width: '200px', background: '#ff7d7d', padding: '10px 20px' }}>
      <div>{error}</div>
      <button onClick={fetchData}>Повторить запрос</button>
    </div>
  )
}