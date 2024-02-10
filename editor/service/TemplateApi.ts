import {TemplateInterface} from "@/interface/model/TemplateInterface";

export default class TemplateApi {
    async getList(query: string, currentPage: number) {
        // fetch the blog posts from the mock API
        const res = await fetch(`${process.env.API_URL}${process.env.API_PATH_GET_TEMPLATES}`);
        let data = {entries: [{uuid: "111", name: "Api Down 1"}, {uuid: "222", name: "Api Down 2"}], total: 2};
        try {
            data = await res.json();
        } catch (Exception) {
        }

        return {
            entries: <TemplateInterface[]> data.entries,
            total: data.total
        };
    }
}