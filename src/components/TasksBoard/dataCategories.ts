import type { ICategory } from './interfaceTasks'

export const categories = ref<ICategory[]>([
  {
    id: 0,
    title: 'На согласовании',
    bgc: '#FF65DD'
  },
  {
    id: 1,
    title: 'Новые',
    bgc: '#33A0FF'
  },
  {
    id: 2,
    title: 'В процессе',
    bgc: '#FFC633'
  },
  {
    id: 3,
    title: 'Готово',
    bgc: '#22C33D'
  },
  {
    id: 4,
    title: 'Доработать',
    bgc: '#F53D5C'
  }
])

export const titleCategory = (categoryId: number) =>
  categories.value.filter((category: ICategory) => category.id === categoryId)[0].title
