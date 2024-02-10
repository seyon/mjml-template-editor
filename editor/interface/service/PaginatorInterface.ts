export interface PaginatorInterface {
    nextPage(): void;

    previousPage(): void;

    jumpToPage(page: number): void;

    getLimit(): number;

    getCurrentPage(): number;

    getPageCount(): number;
}