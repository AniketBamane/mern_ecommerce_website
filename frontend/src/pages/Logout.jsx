import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/slices/authSlice'
import { clearCart } from '../store/slices/orderSlice'

function Logout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(logout())
    dispatch(clearCart())
    navigate("/")
  }, [])
  return (
    null
  )
}

export default Logout