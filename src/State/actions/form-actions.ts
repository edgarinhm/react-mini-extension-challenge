import { createAction } from "@reduxjs/toolkit";

export const formStatus = createAction<Object | undefined>("form/status");
export const formLoader = createAction<Object | undefined>("form/loader");
