import React, {RefObject} from 'react';

import s from './list.module.less';
import {Post as PostType} from '../../typings';
import {Post} from '../';

interface ListProps {
    title: string;
    posts: PostType[];
    onLazyLoading?: () => void;
    forwaredRef: RefObject<HTMLDivElement>;
}

export const List = ({forwaredRef, title, posts}: ListProps) => (
    <div ref={forwaredRef}>
        <h1>{title}</h1>

        <section className={s.posts}>
            {posts.map((post, index) => (
                <Post key={index} index={index} {...post} />
            ))}
        </section>
    </div>
);
