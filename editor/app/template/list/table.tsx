import TemplateApi from "@/service/TemplateApi";
import {TemplateInterface} from "@/interface/model/TemplateInterface";
import TableRowButtons from "@/app/template/list/table-row-buttons";

export default async function TemplatesTable({query, currentPage,}: {
    query: string;
    currentPage: number;
}) {
    const templateService = new TemplateApi();
    const response = await templateService.getList(query, currentPage);
    let rows: any[] = [];
    response.entries.forEach((row: TemplateInterface, index: number) => {
        rows.push(
            <tr className="border-b dark:border-gray-700">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {row.uuid}
                </th>
                <td className="px-4 py-3">
                    {row.name}
                </td>
                <td className="px-4 py-3 flex items-center justify-end">
                    <TableRowButtons uuid={row.uuid}/>
                </td>
            </tr>
        );
    });

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-4 py-4">UUID</th>
                    <th scope="col" className="px-4 py-3">Template</th>
                    <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    );
}