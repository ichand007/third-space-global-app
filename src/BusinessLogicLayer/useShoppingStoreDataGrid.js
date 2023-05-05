/* A Business Layer: function: main grid table data processing  */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from "react-redux";
import { searchItemBegin, searchItemComplete, clearSearchItem } from "../StateManagement/actions/onlineStoreAction";



export default function useShoppingStoreDataGrid () {

const [tableData, setTableData] = useState([]);
const [numberOfTotalFilteredRecords, setNumberOfTotalFilteredRecords] = useState(0);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState();

const url_path_all_products = 'https://dummyjson.com/products';
const url_path_search_result = `https://dummyjson.com/products/search?q=`;

//redux store state access
const state = useSelector((state) => state);
const dispatch = useDispatch();

//fetching data (page) on load using useEffect
useEffect(() => {
  ( async () => {
    try {
      dispatch(searchItemBegin());
      fetch(url_path_all_products)
      .then((data) => data.json())
      .then((data) => {
        setNumberOfTotalFilteredRecords(data.products.length);
        setTableData(data.products.map(i => [i.id,i.title,i.description,i.price,i.discountPercentage,i.rating,i.stock,i.brand,i.category]))
        dispatch(searchItemComplete());
      })
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }

  })();
  }, []);

  //data table options with callback function   
  const options = {
    serverSide: true,
    selectableRows: false,
    onSearchChange: (searchText) => {
      (async () => {
        try {
        dispatch(searchItemBegin());
        
        const url =  searchText? (url_path_search_result+searchText) :  url_path_all_products;
        fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setNumberOfTotalFilteredRecords(data.products.length);
          setTableData(data.products.map(i => [i.id,i.title,i.description,i.price,i.discountPercentage,i.rating,i.stock,i.brand,i.category]));
          dispatch(searchItemComplete());
        }) 
        } catch (err) {
          setError(err);
          setIsLoading(false);
        }
      })();
    }
  };

  return {
    tableData,
    options,
    numberOfTotalFilteredRecords,
    isLoading,
    error
  }

}
