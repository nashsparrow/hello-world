import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { InferGetStaticPropsType } from 'next'
import * as React from 'react'

export interface Message {
  body: string
}

const BASE_URL: string = 'http://localhost:8080/message';

export default function IndexPage({
  messages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postList, setPostList] = React.useState(messages)

  return (
    <main className='container'>
      
      {messages.body}
    </main>
  )
      }


  export async function getStaticProps() {
    console.log('its working')
    const res = await fetch(BASE_URL)
    const messages: Message = await res.json();
  
    return {
      props: {
        messages,
      },
    }
  }