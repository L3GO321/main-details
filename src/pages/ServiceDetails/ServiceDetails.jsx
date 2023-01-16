import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import { Loading, Error } from "../../components"

import { getServiceDetailsRequest } from '../../utils/store/services/actions';

export const ServiceDetails = () => {
  const { id } = useParams()
  const { item, error } = useSelector(store => store)
  const dispatch = useDispatch()

  const fetchServiceDetail = () => {
    dispatch(getServiceDetailsRequest(id))
  }

  useEffect(() => {
    fetchServiceDetail()
  }, [])

  return (
    <Loading>
      {error ? <Error fetchData={fetchServiceDetail} /> :
        <>
          <div>Название: {item?.name} </div>
          <div>Цена: {item?.price}Р</div>
          <div>Описание: {item?.content}</div>
        </>}
    </Loading>
  )
}