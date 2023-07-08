const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, title})  {
    return (
        <Default title={title}>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread!</p> */}
        {/* This is a JSX comment. */}
        <ul>
        {
  breads.map((bread, index)=> {
    return (
      <li key={index}>
        <a href={`/breads/${index}`}>
          {bread.name}
        </a>
      </li>
    )
  })
}



        </ul>
      </Default>
      
      
    )
}


module.exports = Index

function home () {
  return (
    <Def>
        <main>
            <h1>HOME</h1>
        </main>
    </Def>
  )
}

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
      </Def>
    )
  }
  require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.send('Hello world home page')
})

app.get('*', (req, res) => {
    res.send('404 page')
})
app.listen(process.env.PORT)

app.get('/', (req, res) => {
    res.render('home')
  })
  
  app.get('*', (req, res) => {
    res.render('error404')
  })