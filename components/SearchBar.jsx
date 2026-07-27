import "./SearchBar.css";

export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
        </div>
    );
}