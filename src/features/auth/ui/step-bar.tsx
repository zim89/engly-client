import type { Dispatch, SetStateAction } from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import { Button } from '@/shared/ui/common/button'
import { Separator } from '@/shared/ui/common/separator'
import { cn } from '@/shared/utils'
import { steps, type Step } from './register-form'

interface StepBarProps {
  step: Step
  setStep: Dispatch<SetStateAction<Step>>
}
export const StepBar = ({ step, setStep }: StepBarProps) => {
  return (
    <div className='space-y-4'>
      {step === steps.profile && (
        <Button
          variant='link'
          onClick={() => setStep(steps.credentials)}
          className='px-0 no-underline'
        >
          <ArrowLeftIcon />
          <span>Back to step 1</span>
        </Button>
      )}

      <div className='flex items-center gap-1'>
        <span className='flex size-9 items-center justify-center rounded-full border border-primary bg-primary text-white'>
          1
        </span>
        <Separator
          orientation='horizontal'
          className='h-px flex-1 bg-gray-300'
        />
        <span
          className={cn(
            'flex size-9 items-center justify-center rounded-full border border-primary bg-white text-primary',
            step === steps.profile && 'bg-primary text-white',
          )}
        >
          2
        </span>
      </div>
    </div>
  )
}
