import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
    root: {
        gridRow: '1',
        overflow: 'auto',
        width: '100%'
    }
})

const MessageList = () => {
    const [messages, setMessages] = useState([])
    const classes = useStyles();

    const length = messages.length;
    console.log(length)

    useEffect(() => {
        messagesRef
            .orderByKey()
            .limitToLast(15)
            .on('value', (snapshot) => {
                const messages = snapshot.val();
                console.log(messages)
                if (messages === null) return;
                const entries = Object.entries(messages)
                const newMessages = entries.map((entry) => {
                    const [key, nameAndText] = entry
                    return { key, ...nameAndText }
                })
                setMessages(newMessages)
            })
    }, [])
    return (
        <List className={classes.root}>
            {
                messages.map(({ key, name, text }, index) => {
                    const isLastItem = length === index + 1;
                    return <MessageItem key={key} name={name} text={text} isLastItem={isLastItem} ></MessageItem>
                })
            }
        </List >
    )
}

export default MessageList;