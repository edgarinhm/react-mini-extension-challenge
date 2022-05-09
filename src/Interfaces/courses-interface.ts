export interface Courses {
  records: Record[];
}

export interface Record {
  id: string;
  createdTime: Date;
  fields: Fields;
}

export interface Fields {
  Students: string[];
  Name: string;
}
