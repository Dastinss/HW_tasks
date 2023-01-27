import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any МАССИВ!!! ОШИБКА!! было number, т.к .думал ,что это счетчик
    addUserCallback: (name: string) => void // need to fix any ФУНКЦИЯ!!
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    // не пойму куда засунуть setError, если нет пропсов ...

    //добавляем из инпута ввод в строку ниже!!! Я НЕ ДОДУМАЛСЯ почему то... 
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any. КОГДА вписываем букву в инпут, то в евент приходит объект... тип
        const trimmedName = e.currentTarget.value.trim() // создаем переменную, чтобы не дублировать код, который обрезает пробелы в начале или конце вводимых текстовых данных

        if (trimmedName) {
            setName(trimmedName) // если в водимом тексте ошибок нет, то сетаем имя и зануляем ошибку если она там была стр.26
            error && setError('') // зануляем ошибку если она была в инпуте
        } else {
            name && setName('') // пустая строка в инпуте и нейм зануляем даллее выводим ошибку стр.29
            setError('name is required')
        }
    }
    const addUser = () => {
        addUserCallback(name)// при добавлении юзерсов, берем ф-цию из пропсов, которая к нам пришла и передаем нейм
        alert(`Hello, ${name} !`) // need to fix
        setName('') // зачищаем имя после добавления
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) { // достаем у ивента кей, сравниваем что єто была нажата кнопка Ентер и тогда добавляем юзерса (вызываем ф-цию) и проверяем имя (т.к. ф-ции дисейбл батон тут нет)
            addUser()
        }
    }

    const totalUsers = users.length // длинна массива. У меня была ОШИБКА !! думал, что тут ВООБЩЕ ф-ція должна быть ((

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
