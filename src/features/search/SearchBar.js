import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSearchTerm } from "./searchSlice";


export default function SearchBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [term, setTerm] = useState('');
    const onChangeHnadler = (e) =>{
        setTerm(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(addSearchTerm(term));
        setTerm("");
        navigate('/search-page');
    }


    return (
        <div>
            <form>
                <input 
                type="text" 
                placeholder="Search" 
                id="search-input"
                value={term} 
                onChange={onChangeHnadler}
                />
                <button type="submit" id="search-btn" onClick={onSubmit}>
                    <svg id="search-icon" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </form>
        </div>
    )
}
