import {TabTemplate} from 'views/Form/typings';

export interface TemplateInfo {
    _id: string;
    name: string;
}

export interface Template {
    _id: string;
    name: string;
    orgId: string;
    tabs: TabTemplate[];
}
