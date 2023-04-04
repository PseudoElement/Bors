import { FC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { Input, Button } from 'components'

import s from './loginForm.module.scss'

interface FormInputProps {
    email: string
    password: string
}

export const LoginForm: FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormInputProps>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmitLogin: SubmitHandler<FormInputProps> = (data) => {
        console.log(data)
        reset({
            email: '',
            password: '',
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmitLogin)} className={s.form}>
            <label className={s.label}>
                <span className={s.labelText}>E-mail</span>
                <Controller
                    name='email'
                    control={control}
                    rules={{ required: 'email is required' }}
                    render={({ field: { onChange, value } }) => (
                        <Input type='email' value={value} onChange={onChange} />
                    )}
                />
                {errors.email && (
                    <div className={s.errorMessage}>{errors.email.message}</div>
                )}
            </label>

            <label className={s.label}>
                <div className={s.labelInner}>
                    <span>Password</span>
                    <span className={s.forgotPassword}>Forgot your password?</span>
                </div>
                <Controller
                    name='password'
                    control={control}
                    rules={{ required: 'password is required' }}
                    render={({ field: { onChange, value } }) => (
                        <Input withIcon={true} value={value} onChange={onChange} />
                    )}
                />
                {errors.password && (
                    <div className={s.errorMessage}>{errors.password.message}</div>
                )}
            </label>

            <Button type='submit' className={s.submitBtn}>
                Enter
            </Button>
        </form>
    )
}
