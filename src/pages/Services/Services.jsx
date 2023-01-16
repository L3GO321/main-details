import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { Loading, Error } from '../../components';

import { getServicesRequest } from '../../utils/store/services/actions';

import { routesPath } from '../../utils/routes/routes'

export const Services = () => {

  const { items, error } = useSelector(store => store)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchServices = () => {
    dispatch(getServicesRequest())
  }

  const openDetails = (id) => {
    navigate(routesPath.service.replace(/:id/, id))
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <Loading>
      {error ? <Error fetchData={fetchServices} /> :
        items.map(item => (
          <div key={item.id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '20px', width: '200px', cursor: 'pointer' }} onClick={() => openDetails(item.id)}>
            <div>{item.name} {item.price}Р</div>
            <div>{item.content}</div>
          </div>
        ))
      }
    </Loading>
  )
}