import { EnhancedStore } from "@reduxjs/toolkit";
import { BEARER } from "../Constants/api-constant";
import { formLoader } from "../State/actions/form-actions";
import { AppDispatch } from "../State/store";

const httpClientInterceptor = () => {
  return {
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    headers: {
      Authorization: `${BEARER} ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
    },
    interteptors: {
      request: (store: EnhancedStore) => {
        const dispatch: AppDispatch = store.dispatch;
        dispatch(formLoader());
      },
      response: (store: EnhancedStore) => {
        const dispatch: AppDispatch = store.dispatch;
        dispatch(formLoader());
      },
    },
  };
};

export default httpClientInterceptor;
