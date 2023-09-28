import React from 'react'
import CodeSnippet from './codesnippet'
import Sidebar from './sidebar'

export default function Dictionarys() {
  return (
    <>
    <div className='main'>
        <h1>Python dictionaries</h1>

        <p>dictionaries are used to store data value in key:value pairs</p>
        <p> dictionary is a collection which is ordered changeable and do not allow duplicates</p>
        <p>dictionaries are written with curly brackets and have keys and values</p>

        <CodeSnippet CodeStr={'Mydict = {\n"brand":"ford",\n"model":"mustang",\n"year":1964\n}'}></CodeSnippet>

        <p>to access a value of a dictionary use its key name as shown here : </p>
        <CodeSnippet CodeStr={'Mydict = {\n"brand":"ford",\n"model":"mustang",\n"year":1964\n}\nprint(Mydict["brand"])'}></CodeSnippet>
    </div>
    <Sidebar></Sidebar>
    </>
  )
}
