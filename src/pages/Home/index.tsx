import * as zod from 'zod'

import { HomeContainer } from './styles'
import { useContext } from 'react'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { CountdownButton } from './components/CountdownButton'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform the task'),
  minutesAmount: zod
    .number()
    .min(5, 'The cycle needs to be at least 5 minutes')
    .max(60, 'The cycle needs to be at most 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
  const { createNewCircle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { task: '', minutesAmount: 0 },
  })

  const { handleSubmit, reset, watch } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCircle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        <CountdownButton isSubmitDisabled={isSubmitDisabled} />
      </form>
    </HomeContainer>
  )
}
