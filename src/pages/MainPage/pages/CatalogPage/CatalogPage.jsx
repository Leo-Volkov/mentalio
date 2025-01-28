// frontend\src\pages\MainPage\pages\CatalogPage\CatalogPage.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './component/Filter'
import Pagination from './component/Pagination'
import ListCart from './component/ListCart'
import axios from 'axios'

const CatalogPage = () => {
  const { totalPage, carts } = useSelector((state) => state.catalog)

  return (
    <>
      <Filter />
      <ListCart carts={carts} />
      {totalPage > 1 && <Pagination />}
    </>
  )
}

export default CatalogPage
