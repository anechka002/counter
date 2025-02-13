import s from './Counter.module.css'
import Button from '../button/Button';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { incValueAC, resetValueAC } from '../../bll/countReducer';

type PropsType = {
  inputFocus: boolean
}

function Counter({inputFocus}: PropsType) {
  
  const count = useAppSelector(state => state.counter.count)
  const max = useAppSelector(state => state.counter.max)
  const error = useAppSelector(state => state.counter.error)

  const dispatch = useDispatch()
  
  const blueMessage = "enter values and press 'set'";

  const incrementHandler = () => {
    if(count < max) {
      dispatch(incValueAC())
    }
  }

  const resetHandler = () => {
    dispatch(resetValueAC())
  }

  return (
    <div className={s.counter}>
      <div className={count === max ? s.valueItem : s.counterItem}>

      {error // Первым делом проверяем ошибки
        ? <span className={s.error}>{error}</span>
        : inputFocus // Если ошибок нет, проверяем фокус
        ? <span className={s.message}>{blueMessage}</span>
        : <span className={s.count}>{count}</span> // Если нет ошибок и фокуса - показываем счет
      }

      </div>
      <div className={s.btnStyle}>
        <Button 
          className={s.btn}
          title={'inc'} 
          callBack={incrementHandler}
          disabled={inputFocus || count === max}
        />
        <Button 
          className={s.btn}
          title={'reset'} 
          callBack={resetHandler}
          disabled={inputFocus}
        />
      </div>
    </div>
  )
}

export default Counter

