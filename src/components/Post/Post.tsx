import React from 'react';
import {pure} from 'recompose';

import s from './post.module.less';
import {Post as PostType} from '../../typings';

interface PostProps extends PostType {
    index: number;
}

const BasePostComponent = ({index, title, body}: PostProps) => (
    <div className={s.post}>
        <span className={s.counter}>{index}</span>

        <div className={s.main}>
            <h3 className={s.title}>{title}</h3>

            <p className={s.text}>{body}</p>
        </div>
    </div>
);

export const Post = pure(BasePostComponent);
