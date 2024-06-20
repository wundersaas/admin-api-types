export interface ResponseList<T> {
  total: number
  current_page: number
  pages: number
  data: Array<T>
}
