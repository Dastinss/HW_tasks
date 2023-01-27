import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return ( // чего то импут не работает((( скорее всего, потому что захардкоден ' ' в const [name, setName] = useState<string>()
        <div className={s.greetings}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>

            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.error}>{totalUsers}</div>
        </div>
    )
}
// disabled={!name} - дисєйблим кнопку, если нет импута
// onKeyDown={onEnter} - єто "в момент нажатия", есть еще онКейАп - в момент отпускания клавищиЮ онКейПресс - когда уже біло нажатие и отжание
// onBlur={setNameCallback} - проверяем окно инпута на фокусировку на нем, если ее нет ,подсвечиваем краснім как и в случае пустого нейма. Проверяем "трогали\не трогали" )))

export default Greeting
