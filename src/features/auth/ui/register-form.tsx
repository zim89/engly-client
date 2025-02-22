'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/shared/ui/common/button'
import { Form } from '@/shared/ui/common/form'
import { cn, excludeProperties } from '@/shared/utils'
import { RegisterFormSchema, validatePasswords, type RegisterFormValues } from '../lib'
import { useRegister } from '../model'
import { StepBar } from './step-bar'
import { StepCredentials } from './step-credentials'
import { StepProfile } from './step-profile'

export const steps = {
  credentials: 0,
  profile: 1,
} as const
export type Step = (typeof steps)[keyof typeof steps]

export function RegisterForm() {
  const [step, setStep] = useState<Step>(steps.credentials)

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      email: '',
      password: 'VmaP_NZOBp#HF2LM7Ks?cSsyLc?@vq',
      confirm: 'VmaP_NZOBp#HF2LM7Ks?cSsyLc?@vq',
      nativeLanguage: undefined,
      englishLevel: undefined,
      gender: undefined,
      goals: 'DEFAULT',
    },
  })

  const { mutate, isPending } = useRegister()

  const onContinue = async () => {
    const isValid = await form.trigger(['username', 'email', 'password', 'confirm'])

    if (!validatePasswords(form)) return

    if (isValid) {
      setStep(steps.profile)
    }
  }

  const onSubmit = (data: RegisterFormValues) => {
    const formData = excludeProperties(data, ['confirm'])
    mutate({ formData })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-[350px] p-4'>
        <StepBar step={step} setStep={setStep} />

        {step === steps.credentials && (
          <StepCredentials form={form} onContinue={onContinue} />
        )}
        {step === steps.profile && <StepProfile form={form} />}

        <Button
          type='submit'
          className={cn('mt-4 w-full', step === steps.credentials && 'hidden')}
        >
          {isPending ? 'Creating...' : 'Create account'}
        </Button>
      </form>
    </Form>
  )
}
