import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';

import { useUser } from '@/context/UserContext';
import UserItem from './UserItem';

export default function UserList() {
    const router = useRouter();
    const {users} = useUser();

    return (
        <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <UserItem
                    user={item}
                    onPress={() => router.push(`/register/${item.id}`)}
                />
            )}
            contentContainerStyle={{ paddingBottom: 80 }}
        />
    );
}
