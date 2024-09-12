'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const signUpSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
}).refine(data => data.password === data.confirmPassword, {
message: 'Passwords do not match',
path: ['confirmPassword']
    })


const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
        name: '',
        email:'',
        password:'',
        confirmPassword:''
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Card className='min-w-[500px]'>
      <CardHeader>
        <CardTitle>Begin Your Journey...</CardTitle>
        <CardDescription>Create your account to continue</CardDescription>
      </CardHeader>
    
    <CardContent className='space-y-2'>
        <Form {...form}>
          <form className='flex flex-col gap-2' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
                  control={form.control}
                  name='name'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                        placeholder='Enter Your Name here...'
                        {...field}/>
                        
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
            <FormField
                  control={form.control}
                  name='email'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                        type='email'
                        placeholder='Enter Your Email here...'
                        {...field}/>
                        
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                      type='password'
                      placeholder='Enter Your Password...'
                      {...field}
                      onChange={(e) => {
                        e.target.value = e.target.value.trim();
                        field.onChange(e);
                      }}
                      />
                    </FormControl>
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="confirmPassword"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input 
                      type='password'
                      placeholder='Please Confirm Your Password...'
                      {...field}
                      onChange={(e) => {
                        e.target.value = e.target.value.trim();
                        field.onChange(e);
                      }}
                      />
                    </FormControl>
                  </FormItem>
                )}
                />
                <Button type = 'submit' className='self-start'>
                  Sign Up
                </Button>

          </form>
        </Form>
    </CardContent>
    </Card>
  )
}

export default SignUpForm