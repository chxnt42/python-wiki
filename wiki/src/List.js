import React from 'react'
import Sidebar from './sidebar'
import CodeSnippet from './codesnippet'
import { Link } from 'react-router-dom'

export default function List() {
  return (
    <>
    <div className='main'>
        <h1>Python lists</h1>
        <p>list in python are a data structure capable of storing any data type</p>
        <p>they are declared using square brackets as shown here : </p>
        <CodeSnippet CodeStr={'MyList = ["apple","banana",10]'}></CodeSnippet>

        <p>elements in list can be access via indexing indexing works as shown here : </p>
        <CodeSnippet CodeStr={'MyList = ["apple","banana",10]\nMyElement = MyList[0]\nprint(MyElement)'}></CodeSnippet>

        <p>thanks to indexing list can be traversed using loops for example : </p>
        <CodeSnippet CodeStr={'MyList = ["apple","banana",10]\nfor i in range(len(MyList)):\n   print(MyList[i])'}></CodeSnippet>

        <p>for more information on iteration please see the iteration page here is a link</p>
        <Link to="/iteration">iteration</Link>
    </div>
    <Sidebar></Sidebar>
    </>

  )
}
