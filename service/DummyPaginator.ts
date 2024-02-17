import {PaginatorInterface} from "@/interface/PaginatorInterface";

export class DummyPaginator implements PaginatorInterface {
    getPageCount(): number {
        return 3;
    }

    getLimit(): number {
        return 10;
    }

    getTotalEntries(): number {
        return 28;
    }

    getCurrentPage(): number {
        return 1;
    }

    nextPage() {
    }

    previousPage() {
    }

    jumpToPage(page: number) {
    }
}