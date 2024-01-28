type Headline = {
  title: string;
  text: string;
  url: string;
};

type YearlyHeadlines = {
  year: number;
  headlines: Headline[];
};