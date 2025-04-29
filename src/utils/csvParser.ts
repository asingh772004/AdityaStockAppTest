import Papa from 'papaparse';

export interface IndexData {
  index_name: string;
  index_date: string;
  open_index_value: number;
  high_index_value: number;
  low_index_value: number;
  closing_index_value: number;
  points_change: number;
  change_percent: number;
  volume: number;
  turnover_rs_cr: number;
  pe_ratio: number;
  pb_ratio: number;
  div_yield: number;
}

export const loadCSVData = (): Promise<IndexData[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse<IndexData>('/dump.csv', {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (result) => resolve(result.data),
      error: (error) => reject(error),
    });
  });
};
