import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
    name: z.string()
        .min(3, { message: 'Name must be at least 3 characters long' })
        .max(50, { message: 'Name must not exceed 50 characters' })
        .refine(value => value.trim() !== '', { message: 'Name is required' }),
    email: z.string().email(),
    password: z.string()
        .min(6, { message: 'Password must be at least 6 characters long' })
        .refine(value => /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value), {
            message: 'Password must contain at least one uppercase letter, one number, and one special character',
        }),
    confirm: z.string()
        .min(6, { message: 'Password must be at least 6 characters long' })
}).refine((data) => data.confirm === data.password, { message: 'Passwords do not match', path: ["confirm"], })


const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    });

    const sendData = (data) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(sendData)}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Full Name" name='name' {...register("name", { required: "This field is required" })} />
                {errors.name && <small className='text-danger'>{errors.name.message}</small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' {...register("email", { required: "This field is required" })} />
                {errors.email && <small className='text-danger'>{errors.email.message}</small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' {...register("password", { required: "This field is required" })} />
                {errors.password && <small className='text-danger'>{errors.password.message}</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name='confirm' {...register("confirm", { required: "This field is required" })} />
                {errors.confirm && <small className='text-danger'>{errors.confirm.message}</small>}
            </Form.Group>

            <div className='text-end'>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    )
}

export default SignUpForm