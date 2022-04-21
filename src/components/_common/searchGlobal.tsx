import React, {useState, useCallback, useEffect} from 'react';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';

import styles from '../../../public/styles/Autosuggest.module.scss';
import theme from '../../../public/styles/theme.module.scss';
import { Spinner } from 'react-bootstrap';

import { searchGlobal } from 'services/searchService';


// import isMobile from 'ismobilejs';

// const focusInputOnSuggestionClick = !isMobile.any;

//TODO ESTO VA A helpers o utils.js---- 
// const escapeRegexCharacters = (str:string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// ------------------------------------


const getSuggestions = (values:any) => {
    return values
        .map((section:any) => {
            return {
                title: section.title,
                languages: section.data.filter( (data:any) => data.name )
            };
        })
        .filter((section:any) => section.languages.length > 0);
}

const getSuggestionValue = (suggestion: Autosuggest.GetSuggestionValue<any>) => suggestion.name;

const renderSuggestion = (suggestion: Autosuggest.RenderSuggestion<any>) => <span>{suggestion.name}</span>;

const renderSectionTitle = (section: any) => <strong>{section.title}</strong>;

const getSectionSuggestions = (section: any) => section.languages;

const SearchGlobal = () => {
    const [value, setValue]= useState<string>('')
    const [suggestions, setSuggestion]= useState<any[]>([])
    const [loading, setLoading]= useState<boolean>(false)
    const router = useRouter()

    const fetchData = (value:any) => {
        setLoading(true);
        searchGlobal(value)
            .then((res: any) => {
                let resFilter = res.filter((i:any) => i.data.length);
                setSuggestion(getSuggestions(resFilter))
                setLoading(false);
            })
            .catch((e: any) => console.log(e));
    }

    const onChange = (event:any, { newValue }:any) => setValue(newValue)

    const debouncedSearch = useCallback( debounce((value:any) => fetchData(value), 300), [])

    const onSuggestionsFetchRequested = ({ value }:any) =>  debouncedSearch(value)

    const onSuggestionsClearRequested = () =>  setSuggestion([])

    const shouldRenderSuggestions = (value:string, reason:any) =>  value.trim().length > 1;

    const  onSuggestionSelected  = (event:any, { suggestion}:any) => {
        setValue('')
        router.push(suggestion.uri)
    }

    const inputProps = {
        placeholder: "Buscar contacto o empresa",
        value,
        onChange: onChange
    }

    return (
        <>
            <Autosuggest
                multiSection={true}
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderSectionTitle={renderSectionTitle}
                getSectionSuggestions={getSectionSuggestions}
                inputProps={inputProps}
                highlightFirstSuggestion={true}
                shouldRenderSuggestions={shouldRenderSuggestions}
                onSuggestionSelected={onSuggestionSelected}
                //focusInputOnSuggestionClick={focusInputOnSuggestionClick}
                theme={theme}
                id="multiple-sections-example"
            />
            {loading && <Spinner className={styles.autosugestLoading} color='primary' animation={'border'} />}
        </>
           
    );
}

export default SearchGlobal;
