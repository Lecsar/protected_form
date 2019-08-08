import React from 'react';

import s from './spinner.module.less';

export const Spinner = (props: {className?: string}) => (
    <div className={`${s.windows8} ${props.className}`}>
        <div className={s.wBall} id={s.wBall1}>
            <div className={s.wInnerBall} />
        </div>
        <div className={s.wBall} id={s.wBall2}>
            <div className={s.wInnerBall} />
        </div>
        <div className={s.wBall} id={s.wBall3}>
            <div className={s.wInnerBall} />
        </div>
        <div className={s.wBall} id={s.wBall4}>
            <div className={s.wInnerBall} />
        </div>
        <div className={s.wBall} id={s.wBall5}>
            <div className={s.wInnerBall} />
        </div>
    </div>
);
