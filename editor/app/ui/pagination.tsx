'use client';

import {usePathname, useSearchParams} from 'next/navigation';

export default function Pagination({totalPages, totalEntries, limit}: { totalPages: number,  totalEntries: number, limit: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const previousPage = currentPage <= 1 ? 1 : currentPage - 1;
    const nextPage = currentPage >= totalPages ? totalPages : currentPage + 1;
    const entryFrom = (currentPage * limit) - limit + 1;
    const entryUntil = (currentPage * limit);
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const getPages = (totalPages:number) => {
        let content = [];
        for (let i = 1; i <= totalPages; i++) {
            content.push(
                <li>
                    <a href={createPageURL(i)}
                       className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i}</a>
                </li>
            );
        }
        return content;
    };

    return (
        <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">&nbsp;{entryFrom} - {entryUntil}&nbsp;</span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">&nbsp;{totalEntries}&nbsp;</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
                <li>
                    <a href={createPageURL(previousPage)}
                       className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clipRule="evenodd"/>
                        </svg>
                    </a>
                </li>
                {
                    getPages(totalPages)
                }
                <li>
                    <a href={createPageURL(nextPage)}
                       className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}