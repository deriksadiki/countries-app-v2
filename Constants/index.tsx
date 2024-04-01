export type CountryInfo =
  | {
      countryName: string;
      summary: string;
      borders: string[];
      population: number;
      continent: string;
      timezones: string[];
      flag: string;
      startOfWeek: string,
      alpha3Code: string
    }
  | undefined;
