import React from 'react'
import {useForm} from "react-hook-form";
import SearchIcon from '@material-ui/icons/Search'
import '../../../scss/forms/search.scss'

export const SearchForm = () => {
    // Form for searching products
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form className={'search-form'} onSubmit={handleSubmit(onSubmit)}>
            <input name="searchRequest" placeholder={'Search for products'} ref={register}/>
            <label>
                <input type={'submit'}></input>
                <SearchIcon type={'submit'} className={'search-icon'}/>
            </label>
        </form>
    )
}