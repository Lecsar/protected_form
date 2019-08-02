import React, {RefObject} from 'react';

import Post from '../Post';
import s from './list.module.less';
import {Post as PostType} from '../../typings';

interface ListProps {
    title: string;
    posts: PostType[];
    onLazyLoading?: () => void;
    forwaredRef: RefObject<HTMLDivElement>;
}

const List = ({forwaredRef, title, posts}: ListProps) => {
    return (
        <div ref={forwaredRef}>
            <h1>{title}</h1>

            <section className={s.posts}>
                {posts.map((post, index) => (
                    <Post key={index} index={index} {...post} />
                ))}
            </section>
        </div>
    );
};

export default List;
