import React, { useEffect, useState } from 'react'

const Meals = () => {
  const  [items, setItems ]= useState([]);

  useEffect(()=>{
    axios.get("https:www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res=>{
      })
  },[])

  return (
    <div>Meals
    </div>
  )
}

export default Meals