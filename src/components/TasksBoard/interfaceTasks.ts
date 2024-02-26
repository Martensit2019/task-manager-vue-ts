export interface ITask {
  id: string
  description: string
  categoryId: number
}
export interface ICategory {
  id: number
  title: string
  bgc: string
}

export type TStatus = 'success' | 'danger'
