export interface SearchBarItem {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}