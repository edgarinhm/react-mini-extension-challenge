export interface Students {
  records: Record[];
}

export interface Record {
  id: string;
  createdTime: string;
  fields: Fields;
}

export interface Fields {
  Name: string;
  Classes: string[];
}
