import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const useProtectedPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token === null) {
            navigate("/")
        }
    }, [navigate])
}

export default useProtectedPage