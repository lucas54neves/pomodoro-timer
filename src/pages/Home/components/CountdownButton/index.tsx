import { HandPalm, Play } from 'phosphor-react'
import { StartCountdownButton, StopCountdownButton } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

interface CountdownButtonProps {
  isSubmitDisabled: boolean
}

export const CountdownButton = ({ isSubmitDisabled }: CountdownButtonProps) => {
  const { activeCycle, interruptCycle } = useContext(CyclesContext)

  return (
    <>
      {activeCycle ? (
        <StopCountdownButton onClick={interruptCycle} type="button">
          <HandPalm size={24} /> Stop
        </StopCountdownButton>
      ) : (
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Start
        </StartCountdownButton>
      )}
    </>
  )
}
