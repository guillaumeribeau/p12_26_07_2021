import React, { useState, useEffect } from "react";

/**
 * Hooks for fetch data
 * @param   {string}  url the backend url for data access
 * @return  {string}  The state
 */

function useFetch(url) {
  const [state, setState] = useState({
    items: [],
    loading: true,
  });

  useEffect(
    function () {
      (async function () {
        const response = await fetch(url);
        const responseData = await response.json();
        if (response.ok) {
          setState({
            items: responseData,
            loading: false,
          });
        } else {
          console.error(response.status)
          setState({
            items: [],
            loading: false,
          });
        }
      })();
    },
    [url]
  );
   
 
  return [state.loading, state.items];

  
  
}

export default useFetch;
