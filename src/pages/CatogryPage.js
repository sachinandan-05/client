// import React from 'react'
// import { useLocation, useParams } from 'react-router-dom'

// const CatogryPage = () => {
//     const params= useParams()
//     const location=useLocation()
//     console.log("catogry",params)
//     console.log("catogry",location?.search)
//   return (
//     <div>
//       hello lund
//       {location?.search}
//     </div>
//   )
// }

// export default CatogryPage
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productCategory from '../helpers/Catogry'; // Keeping the typo as per your requirement
import SearchCard from './SearchCard';
import summeryApi from '../common';

const CatogryPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const urlSearch = new URLSearchParams(location.search);
    const urlCatogryList = urlSearch.getAll("catogry");

    const catogryOptions = productCategory.map(e => e.value);

    const initialCatogryState = {};
    urlCatogryList.forEach(el => {
      initialCatogryState[el] = true;
    });

    const [selectedCatogry, setSelectedCatogry] = useState(initialCatogryState);
    const [filterCatogryList, setFilterCatogryList] = useState([]);
    const [sortBy, setSortBy] = useState("");

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(summeryApi.filterproduct.url, {
          method: summeryApi.filterproduct.method,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            catogry: filterCatogryList
          })
        });

        const dataResponse = await response.json();
        setData(dataResponse?.data || []);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    const handleSelectCatogry = (e) => {
      const { value, checked } = e.target;
      setSelectedCatogry(prev => ({
        ...prev,
        [value]: checked
      }));
    };

    useEffect(() => {
      const selectedCategories = Object.keys(selectedCatogry)
        .filter(catogry => selectedCatogry[catogry]);

      setFilterCatogryList(selectedCategories);

      const urlParams = selectedCategories.map(cat => `catogry=${cat}`).join("&");
      navigate(`/product-catogry?${urlParams}`);
    }, [selectedCatogry]);

    useEffect(() => {
      fetchData();
    }, [filterCatogryList]);

    const handleSortByChange = (e) => {
      const { value } = e.target;
      setSortBy(value);

      setData(prev => [...prev].sort((a, b) => {
        if (value === 'asc') {
          return a.sellingPrice - b.sellingPrice;
        }
        if (value === 'dsc') {
          return b.sellingPrice - a.sellingPrice;
        }
        return 0;
      }));
    };

    return (
      <div className='container mx-auto p-4'>
        <div className='hidden lg:grid grid-cols-[200px,1fr]'>
          <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
            <div>
              <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>
              <form className='text-sm flex flex-col gap-2 py-2'>
                <div className='flex items-center gap-3'>
                  <input type='radio' name='sortBy' checked={sortBy === 'asc'} onChange={handleSortByChange} value="asc" />
                  <label>Price - Low to High</label>
                </div>
                <div className='flex items-center gap-3'>
                  <input type='radio' name='sortBy' checked={sortBy === 'dsc'} onChange={handleSortByChange} value="dsc" />
                  <label>Price - High to Low</label>
                </div>
              </form>
            </div>
            <div>
              <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>
              <form className='text-sm flex flex-col gap-2 py-2'>
                {productCategory.map((catogry, index) => (
                  <div className='flex items-center gap-3' key={index}>
                    <input type='checkbox' name="catogry" checked={selectedCatogry[catogry.value]} value={catogry.value} id={catogry.value} onChange={handleSelectCatogry} />
                    <label htmlFor={catogry.value}>{catogry.label}</label>
                  </div>
                ))}
              </form>
            </div>
          </div>
          <div className='px-4'>
            <p className='font-medium text-slate-800 text-lg my-2'>Search Results: {data.length}</p>
            <div className='min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]'>
              {data.length !== 0 && !loading && <SearchCard data={data} loading={loading} />}
            </div>
          </div>
        </div>
      </div>
    );
};

export default CatogryPage;
