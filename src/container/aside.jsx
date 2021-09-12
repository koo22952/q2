import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import menu from '@/container/menu.js'

function Aside(props) {
  const history = useHistory()


  return (
    <div className=''>
      {
        menu.map(m => {
          return (
            <>
              <div key={m.key}>
                <Link to={m.key}>
                  <span>{m.icon}</span>
                  <span>{m.title}</span>
                </Link>
              </div>
              {
                m.subs?.length ? m.subs.map(ms =>
                  <div key={ms.key}>
                    <Link to={ms.key}>
                      <span>{ms.title}</span>
                    </Link>
                  </div>,
                ) : <></>
              }
            </>
          )
        })
      }
    </div>
  )
}

export default Aside
