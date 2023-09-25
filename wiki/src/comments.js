import React from 'react'
import Sidebar from './sidebar'
import CodeSnippet from './codesnippet'

export default function Comments() {
  return (
    <>
    <div className='main'>
        <h1>python comments</h1>

        <p>Comments can be used to explain Python code.</p>
        <p>Comments can be used to make the code more readable.</p>
        <p>Comments can be used to prevent execution when testing code.</p>

        <h2>Creating a comment</h2>
        <p>comments start with a "#" and python will ignore them</p>
        <CodeSnippet CodeStr={'#this is a comment\nprint("hello world")'}></CodeSnippet>


        <p>Comments can be placed at the end of a line, and Python will ignore the rest of the line:</p>

        <CodeSnippet CodeStr={'print("hello world") #this is a comment'}></CodeSnippet>

        <div className='space'></div>
        <h2>Multiline comments</h2>
        <p>Python does not really have a syntax for multiline comments.</p>

        <p>To add a multiline comment you could insert a # for each line:</p>

        <CodeSnippet CodeStr={'#This is a comment\n#written in\n#more than just one line\nprint("Hello, World!")'}></CodeSnippet>

    </div>
    <Sidebar></Sidebar>
    </>
  )
}
