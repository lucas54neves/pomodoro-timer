import { createContext, ReactNode, useReducer, useState } from 'react'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  createNewCircle: (data: CreateCycleData) => void
  interruptCycle: () => void
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CycleContextType)

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const createNewCircle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
      task: data.task,
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  const interruptCycle = () => {
    dispatch(interruptCurrentCycleAction())
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        cycles,
        createNewCircle,
        interruptCycle,
        markCurrentCycleAsFinished,
        setSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
