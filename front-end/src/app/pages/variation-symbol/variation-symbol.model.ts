export interface IData {
  chart: IChart
}

export interface IChart {
  error: string;
  result: Array<IResult>
}

export interface IResult {
  indicators: IIndicators;
  meta: IMeta;
  timestamp: Array<number>
}

export interface IIndicators {
  quote: Array<IItemQuote>;
}

export interface IItemQuote {
  close: Array<number>;
  high: Array<number>;
  low: Array<number>;
  open: Array<number>;
  volume: Array<number>;
}

export interface IMeta {
  chartPreviousClose: number;
  currency: string;
  currentTradingPeriod: object;
  dataGranularity: string;
  exchangeName: string;
  exchangeTimezoneName: string;
  firstTradeDate: number;
  gmtoffset: number;
  instrumentType: string;
  previousClose: number;
  priceHint: number;
  range: string;
  regularMarketPrice: number;
  regularMarketTime: number;
  scale: number;
  symbol: string;
  timezone: string;
  tradingPeriods: Array<ITrandingPeriod>
  validRanges: Array<number>
}

export interface ITrandingPeriod {
  end: number;
  gmtoffset: number;
  start: number;
  timezone: string;
}

export interface IValue {
  value: number;
  formated: string;
}