import React from 'react';
import {pure} from 'recompose';

import s from './post.module.less';
import {Post} from '../../typings';

interface PostProps extends Post {
    index: number;
}

const PostComponent = ({index, title, body}: PostProps) => (
    <div className={s.post}>
        <span className={s.counter}>{index}</span>

        <div className={s.main}>
            <h3 className={s.title}>{title}</h3>

            <p className={s.text}>{body}</p>
        </div>
    </div>
);

export default pure(PostComponent);
