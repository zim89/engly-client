import type { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/common/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/common/select'
import { englishLevels, genders, nativeLanguages } from '@/shared/constants'
import type { RegisterFormValues } from '../lib'

const data = [
  {
    name: 'gender',
    label: 'Gender',
    placeholder: 'Select your gender',
    type: 'select',
    obj: genders,
  },
  {
    name: 'nativeLanguage',
    label: 'Native language',
    placeholder: 'Select your native language',
    type: 'select',
    obj: nativeLanguages,
  },
  {
    name: 'englishLevel',
    label: 'Native language',
    placeholder: 'Select your English level',
    type: 'select',
    obj: englishLevels,
  },
] as const

interface StepProfileProps {
  form: UseFormReturn<RegisterFormValues>
}

export const StepProfile = ({ form }: StepProfileProps) => {
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={i.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(i.obj).map(value => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  )
}
