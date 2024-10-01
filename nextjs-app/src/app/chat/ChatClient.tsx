'use client';
import Chat from '@/components/chat/Chat';
import Contacts from '@/components/chat/Contacts';
import { TUserWithChat } from '@/types';
import { User } from '@prisma/client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

interface ChatClientProps {
    currentUser?: User | null;
}

const ChatClient = ({ currentUser }: ChatClientProps) => {

    const [receiver, setReceiver] = useState({
        receiverId: "",
        receiverName: "",
        receiverImage: "",
    })

    const [layout, setLayout] = useState(false);

    const fetcher = (url: string) => axios.get(url).then((res) => res.data);
    const { data: users, error, isLoading } = useSWR('/api/chat', fetcher, {
        refreshInterval: 100
    });

    console.log(users);

    const currentUserwithMessage = users?.find((user: TUserWithChat) => user.email === currentUser?.email)

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

  return (
    <main>
        <div className='grid grid-cols-[1fr] md:grid-cols-[300px_1fr]'>
            <section className={`md:flex ${layout && 'hidden'}`}>
                <Contacts 
                    users={users}
                    currentUser={currentUserwithMessage}
                    setLayout={setLayout}
                    setReceiver={setReceiver}
                />
            </section>

            <section className={`md:flex ${!layout && 'hidden'}`}>
                <Chat 
                    currentUser={currentUserwithMessage}
                    receiver={receiver}
                    setLayout={setLayout}
                />
            </section>
        </div>
    </main>
  )
}

export default ChatClient