import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch } from '../redux/filterSlice';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    display: "flex",
    flexDirection: "row-reverse"
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: "pointer",
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            width: '18ch',
            paddingLeft: `calc(1em + ${theme.spacing(1)})`
        },
        [theme.breakpoints.up('sm')]: {
            width: '22ch'
        },
        [theme.breakpoints.up('md')]: {
            width: '36ch'
        },
        [theme.breakpoints.up('lg')]: {
            width: '50ch'
        },
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        }
    },
}));

const SearchBar = (props) => {
    //const { search } = useSelector((state) => state.filters);
    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        //dispatch(updateSearch(e.target.value))
        highlightKeywords(e.target.value)

    }

    const highlightKeywords = (search) => {
        // Clear previous highlights
        removeHighlights(document.body);

        // Perform the search
        if (search.trim()) {
            searchAndHighlight(document.body, search.trim().toLowerCase());
        }
    };

    const searchAndHighlight = (element, keyword) => {
        if (element.nodeType === Node.TEXT_NODE) {
            const regex = new RegExp(`${keyword}`, "gi");
            const matches = element.textContent.match(regex);
            if (matches) {
                const replaced = element.textContent.replace(regex, (match) => {
                    return `<span class="highlight">${match}</span>`;
                });
                element.parentNode.innerHTML = replaced
            }
        } else if (element.nodeType === Node.ELEMENT_NODE && !element.classList.contains("highlight")) {
            
            element.childNodes.forEach(child => searchAndHighlight(child, keyword));
        }
    };

    const removeHighlights = (element) => {
        const highlights = element.querySelectorAll(".highlight");
        highlights.forEach((highlight) => {
            highlight.outerHTML = highlight.textContent;
        });
    };


    return (
        <Search>
            <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                onChange={onChangeHandler}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </Search>
    )
}
export default SearchBar;
