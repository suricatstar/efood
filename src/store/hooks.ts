import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// Hooks customizados com tipos corretos
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()