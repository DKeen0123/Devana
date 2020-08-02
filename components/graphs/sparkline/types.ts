export interface SparklineDataItem {
  date: Date;
  value: number;
}

export interface SparklineProps {
  data: SparklineDataItem[];
  width: number;
  height: number;
}
