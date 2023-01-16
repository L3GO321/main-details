import { useSelector } from 'react-redux'

import './style.modules.css'

export const Loading = (props) => {
  const { loading } = useSelector(store => store)

  return (
    <div style={{ position: 'relative' }}>
      {loading ?
        <>
          <div className='lds-wrapper'>
            <div className="lds-ring">
              <div></div><div></div><div></div><div></div>
            </div>
          </div>
          {props.children}
        </> : props.children
      }
    </div>
  )
}