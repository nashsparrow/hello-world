
import { InferGetServerSidePropsType } from 'next'
import * as React from 'react'

export interface Message {
  body: string
}

const BASE_URL: string = 'https://y6ac3cnvr2wn3mctarho3ap2hm0vlepi.lambda-url.us-east-1.on.aws/';

export default function IndexPage({
  messages,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  //const [postList, setPostList] = React.useState(messages)

  return (
    <main className='container'>
      
      {messages?.body}
    </main>
  )
      }

  export async function getStaticProps() {
    //console.log('its working')
    const res = await fetch(BASE_URL)
    const messages: Message = await res.json()!;
  
    return {
      props: {
        messages,
      },
    }
  }