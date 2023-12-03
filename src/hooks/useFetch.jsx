import axios from "axios";
import { useEffect, useReducer } from "react";

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_DATA":
      return { ...state, data: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    case "SET_ISPENDING":
      return { ...state, isPending: payload };
  }
};

export function useFetch(url) {
  const [state, dispatch] = useReducer(changeState, {
    data: null,
    error: null,
    isPending: false,
  });

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: "SET_ISPENDING", payload: true });
      try {
        const req = await axios(url);
        console.log("req:", req);

        if (req.status != 200) {
          throw new Error(req.message);
        }

        dispatch({ type: "SET_DATA", payload: req.data });
        dispatch({ type: "SET_ISPENDING", payload: false });
        dispatch({ type: "SET_ERROR", payload: null });
      } catch {
        console.log(error);
        dispatch({ type: "SET_ERROR", payload: error });
        dispatch({ type: "SET_ISPENDING", payload: false });
      }
    };

    getData();
  }, [url]);

  return { ...state };
}
