import { useState } from 'react'
import useProject from './hooks/useProject'


function App() {

  const {
    isLoading,
    projectList,
    currentPage,
    totalPages,
    postPerPage,
    onFirstPage,
    onLastPage,
    onPrevPage,
    onNextPage
  } = useProject()


  const lastProjectIndex = currentPage * postPerPage
  const firstProjectIndex = lastProjectIndex - postPerPage
  const currentProjects = projectList.slice(firstProjectIndex, lastProjectIndex)

  return (
    <>
      <div className='app'>
        <div className="project">
          {!isLoading ?
            <>
              <h1 className="project__title">Project Table</h1>
              <table className="project__table">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Percentage funded</th>
                    <th>Amount pledged</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProjects.map(project => (
                    <tr key={project[`s.no`]}>
                      <td>{project[`s.no`]}</td>
                      <td>{project[`num.backers`]}</td>
                      <td>{project[`amt.pledged`]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='project__pagination'>
                <button
                  className='project__pagination--button'
                  disabled={currentPage === 1}
                  onClick={onFirstPage}
                >First</button>
                <button
                  className='project__pagination--button'
                  disabled={currentPage === 1}
                  onClick={onPrevPage}
                >Prev</button>
                <span>
                  {currentPage} of {totalPages}
                </span>
                <button
                  className='project__pagination--button'
                  disabled={currentPage === totalPages}
                  onClick={onNextPage}
                >Next</button>
                <button
                  className='project__pagination--button'
                  disabled={currentPage === totalPages}
                  onClick={onLastPage}
                >Last</button>
              </div>
            </>
            : <div>Loading...</div>
          }
        </div>
      </div>
    </>
  )
}

export default App
