import React from 'react'
import Sidebar from './sidebar'
import CodeSnippet from './codesnippet'

export default function Variables() {
  return (
    <>
    <div className='main'>
        <h1>Variables</h1>
        <p>Variables are how we remember data in python</p>
        <p>Variables in python do not need a type specified as the type is inferred</p>

        <CodeSnippet CodeStr={"MyVar = 5"}></CodeSnippet>
        <p>in this example the type "integer" is inferred because the variable is a number</p>

        <h3>Casting</h3>
        <p>although you cant specify a type you can cast a variable to a type to ensure its a specified type for example : </p>
        <CodeSnippet CodeStr={"MyVar = int(5)"}></CodeSnippet>

        <p>here is an example of some variables with different types</p>
        <CodeSnippet CodeStr={'MyString = "hello"\nMyNum = 5\nMyList = []'}></CodeSnippet>

    </div>
    <Sidebar></Sidebar>
    </>
  )
}
