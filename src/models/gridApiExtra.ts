import {
  GridApiCommon,
  GridColumnReorderApi,
  GridRowMultiSelectionApi,
  GridRowProApi,
} from '@mui/x-data-grid';
import { GridPrivateOnlyApiCommon } from '@mui/x-data-grid/internals';
import { GridInitialStatePro, GridStateExtra } from './gridStateExtra';
import type {
  GridColumnPinningApi,
  GridDetailPanelApi,
  GridRowPinningApi,
  GridDetailPanelPrivateApi,
} from '../hooks';

/**
 * The api of `DataGridExtra`.
 */
export interface GridApiExtra
  extends GridApiCommon<GridStateExtra, GridInitialStatePro>,
    GridRowProApi,
    GridColumnPinningApi,
    GridDetailPanelApi,
    GridRowPinningApi,
    // APIs that are
    GridRowMultiSelectionApi,
    GridColumnReorderApi,
    GridRowProApi {}

export interface GridPrivateApiExtra
  extends GridApiExtra,
    GridPrivateOnlyApiCommon<GridApiExtra, GridPrivateApiExtra>,
    GridDetailPanelPrivateApi {}
