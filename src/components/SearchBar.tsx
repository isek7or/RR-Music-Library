import { useState } from 'react'

interface SearchBarProps {
    handleSearch: (e: React.FormEvent<HTMLFormElement>, searchTerm: string) => void
}

function SearchBar(props: SearchBarProps){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e: React.FormEvent<HTMLFormElement>) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
