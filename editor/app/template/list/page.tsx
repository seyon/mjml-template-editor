export default function Home() {
    return (
        <main>
            <table
                className="table-auto border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
                <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                    <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Template</th>
                    <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Example</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                        <a href="/template/example">
                            Edit
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </main>
    );
}
