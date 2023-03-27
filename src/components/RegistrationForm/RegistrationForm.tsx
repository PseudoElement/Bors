import { FC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'

import { Input, Button } from 'components'

import s from './registrationForm.module.scss'

interface FormInputProps {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export const RegistrationForm: FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm<FormInputProps>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmitRegistration: SubmitHandler<FormInputProps> = data => {
        console.log(data)
        reset({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmitRegistration)} className={s.form}>
            <label className={s.label}>
                <span className={s.labelText}>Name</span>
                <Controller
                    name='name'
                    control={control}
                    rules={{ required: 'is name required' }}
                    render={({ field: { onChange, value } }) => (
                        <Input value={value!} onChange={onChange} />
                    )}
                />
                {errors.name && (
                    <div className={s.errorMessage}>{errors.name.message}</div>
                )}
            </label>

            <label className={s.label}>
                <span className={s.labelText}>E-mail</span>
                <Controller
                    name='email'
                    control={control}
                    rules={{ required: 'is email required' }}
                    render={({ field: { onChange, value } }) => (
                        <Input type='email' value={value} onChange={onChange} />
                    )}
                />
                {errors.email && (
                    <div className={s.errorMessage}>{errors.email.message}</div>
                )}
            </label>

            <label className={s.label}>
                <span className={s.labelText}>Password</span>
                <Controller
                    name='password'
                    control={control}
                    rules={{ required: 'is password required', minLength: 6 }}
                    render={({ field: { onChange, value } }) => (
                        <Input withIcon={true} value={value} onChange={onChange} />
                    )}
                />
                {errors.password && (
                    <div className={s.errorMessage}>{errors.password.message}</div>
                )}
            </label>

            <label className={s.label}>
                <span className={s.labelText}>Confirm password</span>
                <Controller
                    name='confirmPassword'
                    control={control}
                    rules={{
                        required: 'is confirm password required',
                        minLength: 6,
                        validate: (value: string, data: FormInputProps) =>
                            value === data.password || "Passwords doesn't match",
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input withIcon={true} value={value!} onChange={onChange} />
                    )}
                />
                {errors.confirmPassword && (
                    <div className={s.errorMessage}>{errors.confirmPassword.message}</div>
                )}
                {errors.confirmPassword
                    ? ''
                    : getValues('password') !== getValues('confirmPassword') && (
                        <div className={s.errorMessage}>password mismatch</div>
                    )}
            </label>
            <Button type='submit' className={s.submitBtn}>
                Register
            </Button>

            <p className={s.agreeInfo}>
                By clicking the "Register" button, I consent to the collection and
                processing of my personal data in accordance with the{' '}
                <Link href={'#'}>
                    <a className={s.link}>Policy</a>
                </Link>{' '}
                and accept the terms of the{' '}
                <Link href={'#'}>
                    <a className={s.link}>User Agreement</a>
                </Link>
            </p>
        </form>
    )
}
