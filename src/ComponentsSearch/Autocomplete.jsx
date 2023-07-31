import React, { useState, useRef, useEffect, useMemo } from "react";
import CallContext from "../CustomHooks/CallContext";
import AutoCompleteItem from "./AutoCompleteItem";
import "./index.css";

const AutoComplete = ({ data, onSelect }) => {
    const [isVisbile, setVisiblity] = useState(false);
    const {searchmovies2,setSearchmovies2} = CallContext();
    //const [search, setSearch] = useState("");
    const [cursor, setCursor] = useState(-1);

    const searchContainer = useRef(null);
    const searchResultRef = useRef(null);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const scrollIntoView = position => {
        searchResultRef.current.parentNode.scrollTo({
            top: position,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
            return () => {};
        }

        let listItems = Array.from(searchResultRef.current.children);
        listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
    }, [cursor]);

    const suggestions = useMemo(() => {
        if (!searchmovies2) return data;

        setCursor(-1);
        scrollIntoView(0);

        return data.filter(item =>
            item.titulo.toLowerCase().includes(searchmovies2.toLowerCase())
        );
    }, [data, searchmovies2]);

    const handleClickOutside = event => {
        if (
            searchContainer.current &&
            !searchContainer.current.contains(event.target)
        ) {
            hideSuggestion();
        }
    };

    const showSuggestion = () => setVisiblity(true);

    const hideSuggestion = () => setVisiblity(false);

    const keyboardNavigation = e => {
        if (e.key === "ArrowDown") {
            isVisbile
                ? setCursor(c => (c < suggestions.length - 1 ? c + 1 : c))
                : showSuggestion();
        }

        if (e.key === "ArrowUp") {
            setCursor(c => (c > 0 ? c - 1 : 0));
        }

        if (e.key === "Escape") {
            hideSuggestion();
        }

        if (e.key === "Enter" && cursor > 0) {
            setSearchmovies2(suggestions[cursor].titulo);
            hideSuggestion();
            onSelect(suggestions[cursor]);
        }
    };

    return (
        <div style={{ height: "100%" }} ref={searchContainer}>
            <input
                type="text"
                name="search"
                className="search-bar"
                autoComplete="off"
                value={searchmovies2}
                onClick={showSuggestion}
                onChange={e => setSearchmovies2(e.target.value)}
                onKeyDown={e => keyboardNavigation(e)}
            />

            <div
                className={`search-result ${
                    isVisbile ? "visible" : "invisible"
                }`}
            >
                <ul className="list-group" ref={searchResultRef}>
                    {suggestions.map((item, index) => (
                        <AutoCompleteItem
                            key={item.titulo}
                            onSelectItem={() => {
                                hideSuggestion();
                                setSearchmovies2(item.titulo);
                                onSelect(item);
                            }}
                            isHighlighted={cursor === index ? true : false}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AutoComplete;
