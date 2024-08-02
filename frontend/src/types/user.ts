import { Place } from "./place";

export interface User {
  id: string;
  name: string;
  image: string;
  places: Place[];
}
