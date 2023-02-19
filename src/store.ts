import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IUseCounterStore {
    count: number
    isLoading: boolean
    error: string
    augment: () => void
    decrease: () => void
}

interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface IUseTodosStore {
    todos: ITodo[]
    isLoading: boolean
    error: string
    fetchUsers: () => void
}

export const useCounterStore = create<IUseCounterStore>()(
    persist(
        devtools((set, get) => ({
            count: 0,
            isLoading: false,
            error: '',
            augment: () =>
                set((state) => ({
                    count: state.count + 1,
                })),
            decrease: () => {
                const stateCount = get().count
                if (stateCount <= 0) {
                    return
                }

                set((state) => ({
                    count: state.count - 1,
                }))
            },
        })),
        { name: 'useCounterStore', version: 1 }
    )
)

export const useTodosStore = create<IUseTodosStore>()(
    devtools((set) => ({
        todos: [],
        isLoading: false,
        error: '',
        fetchUsers: async () => {
            set({
                isLoading: true,
            })
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/todos?_limit=10'
                )

                if (!response.ok) throw new Error('Fail')

                set({
                    todos: await response.json(),
                    error: '',
                })
            } catch (err: any) {
                set({
                    error: err.message,
                })
            } finally {
                set({
                    isLoading: false,
                })
            }
        },
    }))
)
