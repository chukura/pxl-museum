export default interface Piece {
  objectNumber: string;
  principalMaker: string;
  title: string;
  longTitle: string;
  subTitle: string; // "h 145mm × w 105mm"
  scLabelLine: string; // "Dick Bruna (1927), collage on cardboard, 1972"
  label: {
    title: string;
    makerLine: string;
    description: string;
    notes: string;
    date: string;
  };
  physicalMedium: string;
  webImage: {
    url: string;
    width: number;
    height: number;
  };
  materials?: Array<string>;
  dimentions?: Array<object>;
  description?: string;
  copyrightHolder?: string;
}
