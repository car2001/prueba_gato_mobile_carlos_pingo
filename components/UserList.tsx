import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';
import UserItem from './UserItem';

const users = [
    {
        id: '1',
        name: 'Juan Pérez',
        email: 'juan@example.com',
        dni: '12345678',
        active: true,
    },
    {
        id: '2',
        name: 'María López',
        email: 'maria@example.com',
        dni: '87654321',
        active: false,
    },
];

export default function UserList() {
    const router = useRouter();

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
