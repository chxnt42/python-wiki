import React from 'react'
import Sidebar from './sidebar'
import CodeSnippet from './codesnippet'

export default function DataTypes() {
  return (
    <>
    <div className='main'>
        <h1>Python data-types</h1>


        <h3>integers</h3>
        <p>an integer is a whole number and they are declared like this :</p>
        <CodeSnippet CodeStr={"num = 5"}></CodeSnippet>

        <h3>strings</h3>
        <p>string are text and they are declared as like this :</p>
        <CodeSnippet CodeStr={'MyString = "Hello World!!"'}></CodeSnippet>

        <h3>list</h3>
        <p>list are a data structure used to store multiple elements in python any data type can be stored in them and they are declared as like this :</p>
        <CodeSnippet CodeStr={'MyList = ["here is a string",10,5,"another string",False]'}></CodeSnippet>

        <h3>dictionary</h3>
        <p>dictionarys are a data structure with a key,value pair system where a key corresponds to a value. dictionarys do not contain duplicates and are defined like this :</p>
        <CodeSnippet CodeStr={'MyDict = {"MyKey":5}'}></CodeSnippet>

    </div>
    <Sidebar></Sidebar>
    </>
  )
}
