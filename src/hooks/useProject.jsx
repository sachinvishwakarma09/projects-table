import { useState, useEffect } from 'react'
const API = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'

const useProject = () => {

    const [projectList, setProjectList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const postPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)

                let response = await fetch(API)
                response = await response.json()

                setProjectList(response)
                setTotalPages(Math.ceil(response.length / postPerPage))

            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        })()

    }, [])

    const onFirstPage = () => setCurrentPage(1)

    const onLastPage = () => setCurrentPage(totalPages)

    const onPrevPage = () => setCurrentPage(prePage => prePage - 1)

    const onNextPage = () => setCurrentPage(prePage => prePage + 1)

    return {
        isLoading,
        projectList,
        currentPage,
        totalPages,
        postPerPage,
        onFirstPage,
        onLastPage,
        onPrevPage,
        onNextPage
    }
}

export default useProject