import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Context } from 'node:vm'

const useAuth = () => useContext<Context>(AuthContext)

export default useAuth
