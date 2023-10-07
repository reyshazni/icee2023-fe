import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import OnConstruction from '@/components/OnConstruction'

export default function Register() {
  return (
    <>
      <OnConstruction />
    </>
  )
}
