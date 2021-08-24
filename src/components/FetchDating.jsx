import React, { useState, useEffect } from "react";


function useFetch(url) {
  const [state, setState] = useState({
    items: [],
    loading: true,
    error: null,
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
          alert(JSON.stingify(responseData));
          setState({
            items: [],
            loading: false,
            error: true,
          });
        }
      })();
    },
    [url]
  );

  return [state.loading, state.items, state.error];
}

export default useFetch;
