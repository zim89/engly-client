import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import type { UseFormReturn } from 'react-hook-form'
import { Button } from '@/shared/ui/common/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/common/form'
import { Input } from '@/shared/ui/common/input'
import type { RegisterFormValues } from '../lib'

const data = [
  {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter username',
    icon: false,
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    icon: false,
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    icon: true,
  },
  {
    name: 'confirm',
    label: 'Confirm password',
    placeholder: 'Confirm password',
    icon: true,
  },
] as const

interface StepCredentialsProps {
  form: UseFormReturn<RegisterFormValues>
  onContinue: () => void
}

export const StepCredentials = ({ form, onContinue }: StepCredentialsProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmVisible, setIsConfirmVisible] = useState(false)
  return (
    <div className='space-y-6'>
      {data.map(i => (
        <FormField
          key={i.name}
          control={form.control}
          name={i.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{i.label}</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    placeholder={i.placeholder}
                    {...field}
                    onBlur={() => {
                      field.onBlur()
                      form.trigger(i.name)
                    }}
                  />

                  {i.icon && (
                    <button
                      type='button'
                      onClick={() =>
                        i.name === 'password'
                          ? setIsPasswordVisible(!isPasswordVisible)
                          : setIsConfirmVisible(!isConfirmVisible)
                      }
                      className='absolute right-0 top-1/2 -translate-y-1/2'
                    >
                      {isPasswordVisible ? (
                        <EyeOffIcon className='stroke-1' />
                      ) : (
                        <EyeIcon className='stroke-1' />
                      )}
                    </button>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
      <Button type='button' onClick={onContinue} className='w-full'>
        Continue
      </Button>
    </div>
  )
}
