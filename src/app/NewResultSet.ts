
 export class Pagination {
    totalElements: number = 0;
    pageSize: number = 25;
    pageNumber: number = 0;
  }
  

export class NewResultSet<T> {
  content: T[] = [];
  totalElements: any;
  size:any;
  pageable: Pagination = new Pagination();
  errorMessage: string = "";
  error: string = "";
}
