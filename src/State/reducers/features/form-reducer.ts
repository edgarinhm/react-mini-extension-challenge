import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { formLoader, formStatus } from "../../actions/form-actions";

export interface FormState {
  isLoading: boolean;
  message: string;
}

const initialState: FormState = {
  isLoading: false,
  message: "",
};

const handleFormStatusFulfilled = (
  state: FormState,
  { payload }: PayloadAction<FormState>
) => {
  state.message = payload.message;
};

const handleLoaderToggle = (state: FormState) => {
  state.isLoading = !state.isLoading;
};

export default createReducer(initialState, {
  [formStatus.type]: handleFormStatusFulfilled,
  [formLoader.type]: handleLoaderToggle,
});
