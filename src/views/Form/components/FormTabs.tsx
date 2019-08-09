import React, {useState} from 'react';
import {noop} from 'lodash';
import {Grid, AppBar, Tabs, Tab} from '@material-ui/core';
import {Block} from '../typings';
import {useFormTabsStyles} from '../styles';

interface FormTabsProps {
    activeTabId: string;
    tabs: Block[];
    setTabActiveTabId: (id: string) => void;
}

const a11yProps = (index: number) => ({
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
});

export const FormTabs = ({activeTabId, tabs = [], setTabActiveTabId = noop}: FormTabsProps) => {
    const s = useFormTabsStyles();
    const handleChange = (event: React.ChangeEvent<{}>, tabId: string) => setTabActiveTabId(tabId);

    return (
        <Grid item className={s.tabsWrapper} container>
            <AppBar position="static" color="default">
                <Tabs
                    value={activeTabId}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {tabs.map(({id, name}, index) => (
                        <Tab key={id} className={s.tab} label={name} value={id} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </AppBar>
        </Grid>
    );
};
